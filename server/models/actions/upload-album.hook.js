const path = require('path');
const fs = require('fs');
const AdminBro = require('admin-bro');
const getMP3Duration = require('get-mp3-duration')

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

		tracks.map((track) => {
			const buffer = fs.readFileSync(`uploads/${record.params._id}/${track.name}`)

			tracksForRec.push({
				name: track.name,
				url: `/uploads/${record.params._id}/${track.name}`,
				length: getMP3Duration(buffer),
			})
		})

		await record.update({ tracks: tracksForRec })

		return response

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
