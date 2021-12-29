const path = require('path');
const fs = require('fs');
const AdminBro = require('admin-bro');
const mm = require('music-metadata');
const Album = require('../../models/Content/album/album.model')


const removeTrackTag = (trackName) => {
	if (trackName.includes('.mp3')) {
		return trackName.replace('.mp3', '')
	}
	if (trackName.includes('.wav')) {
		return trackName.replace('.wav', '')
	}
	if (trackName.includes('.wma')) {
		return trackName.replace('.wma', '')
	}
}


/** @type {AdminBro.After<AdminBro.ActionResponse>} */
const after = async (response, request, context) => {
	if (request.method !== 'post') {
		return response
	}
	try {
		const { record } = context;
		const abUpload = context['admin-bro-upload'];
		const tracks = abUpload.uploadTracks;
		const tracksToDelete = abUpload['tracks.filesToDelete']

		// const albumToModify = await Album.find({ _id: record.params._id });
		const albumToModify = await record.resource.MongooseModel.find({ _id: record.params._id });
		const tracksForRec = albumToModify[0].tracksForFront ? albumToModify[0].tracksForFront : [];

		//deleting tracks if needed
		if (tracksToDelete) {
			// if there are tracks to delete from adminbro/upload
			// need to sync tracksForFront array in record with tracks array
			const { tracksForFront } = albumToModify[0];
			tracksToDelete.map((index) => {
				tracksForFront.splice(index, 1);
			})
			await record.update({ tracksForFront })
		}

		//checking if there are any tracks to rename in payload
		const { payload } = request
		Object.keys(payload).map(async (key) => {
			if (key.includes('tracksToRename.')) {
				const tracNameOriginal = key.slice(key.indexOf('.') + 1);
				tracksForRec.map(async (trackData) => {
					if (trackData.name === tracNameOriginal) {
						trackData.name = payload[key] // updating track name from the payload
						await record.update({ tracksForFront: tracksForRec })
					}
				})
			}
		})

		// if no new tracks, return
		if (!tracks) {
			return response
		}

		//adding new tracks for front
		const formTrackForArray = async(track) => {
			const buffer = fs.readFileSync(`uploads/${record.params._id}/${track.name}`);

			const metadata = await mm.parseBuffer(buffer);

			return tracksForRec.push({
				name: removeTrackTag(track.name),
				url: `/uploads/${record.params._id}/${track.name}`,
				length: metadata.format.duration,
			})
		}

		const formArrayOfTracks = async() => {
			return Promise.all(tracks.map((track) => formTrackForArray(track)))
		}

		return formArrayOfTracks()
			.then(async () => {
				await record.update({ tracksForFront: tracksForRec })

				return response
			})
			.catch((err) => {
				console.log(err)
			})

	} catch (error) {
		console.log(error)
	}
};

// /** @type {AdminBro.Before} */
// const before = async (request, context) => {
// 	try {
// 		if (request.method === 'post') {
// 			const { uploadFile, ...otherParams } = request.payload;
//
// 			eslint-disable-next-line no-param-reassign
			// context.uploadFile = uploadFile;
			//
			// return {
			// 	...request,
			// 	payload: otherParams,
			// };
		// }
		//
		// return request;
	//
	// } catch (error) {
	// 	console.log(error)
	// }
// };

module.exports = { after };
