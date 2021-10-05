const path = require('path');
const fs = require('fs');
const AdminBro = require('admin-bro');
const getMP3Duration = require('get-mp3-duration')
const mm = require('music-metadata');

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
		const { tracks } = abUpload;
		const tracksForRec = []

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
				await record.update({ tracks: tracksForRec })

				return response
			})
			.catch((err) => {
				console.log(err)
			})

		// await tracks.map(async (track) => {
		// 	const buffer = fs.readFileSync(`uploads/${record.params._id}/${track.name}`);
		//
		// 	const metadata = await mm.parseBuffer(buffer);
		//
		// 	tracksForRec.push({
		// 		name: track.name,
		// 		url: `/uploads/${record.params._id}/${track.name}`,
		// 		length: metadata.format.duration,
		// 	})
		// })


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
