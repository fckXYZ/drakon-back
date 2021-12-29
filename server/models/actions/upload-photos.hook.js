const path = require('path');
const fs = require('fs');
const AdminBro = require('admin-bro');
const mm = require('music-metadata');
const Album = require('../../models/Content/album/album.model')
const sharp = require('sharp');

/** @type {AdminBro.After<AdminBro.ActionResponse>} */
const after = async (response, request, context) => {
	if (request.method !== 'post') {
		return response
	}
	try {
		const { record } = context;
		const abUpload = context['admin-bro-upload'];
		const photosToUpload = abUpload.file;
		const photosToDelete = abUpload['photos.filesToDelete']

		const albumToModify = await record.resource.MongooseModel.find({ _id: record.params._id });
		const existingPhotos = albumToModify[0].photosForFront ? albumToModify[0].photosForFront : [];

		//deleting photos if needed
		if (photosToDelete) {
			// if there are photos to delete from adminbro/upload
			// need to sync tracksForFront array in record with tracks array
			photosToDelete.map((index) => {
				const webpName = existingPhotos[index].replace('/uploads/', '')

				fs.unlinkSync(path.join('uploads/', webpName))
				existingPhotos.splice(index, 1);
			})
			await record.update({ photosForFront: existingPhotos })
			if (!photosToUpload && !existingPhotos.length) {
				fs.rmdirSync(`uploads/${record.params._id}`)
			}
		}

		if (!photosToUpload) {
			return response
		}

		//adding new photos for front
		const formTrackForArray = async(photo) => {
			const buffer = fs.readFileSync(`uploads/${record.params._id}/${photo.name}`);

			await sharp(buffer)
				.toFile(`uploads/${record.params._id}/${photo.name}.webp`)


			return existingPhotos.push(`/uploads/${record.params._id}/${photo.name}.webp`)
		}

		const formArrayOfTracks = async(photos) => {
			return Promise.all(photos.map((photo) => formTrackForArray(photo)))
		}

		return formArrayOfTracks(photosToUpload)
			.then(async () => {
				await record.update({ photosForFront: existingPhotos })

				return response
			})
			.catch((err) => {
				console.log(err)
			})



	} catch (error) {
		console.log(error)
	}
};

module.exports = { after };
