const AdminBro = require('admin-bro');
const Album = require('./album.model');
const uploadFeature = require('@admin-bro/upload')
const path = require("path");

const {
	after: uploadAfterHook,
} = require('../../actions/upload-album.hook')

const options = {
	parent: {
		name: 'Content',
	},
	properties: {
		_id: {
			isVisible: false,
		},
		trackList: {
			components: {
				edit: AdminBro.bundle('../../components/album-tracks.list.tsx'),
				list: AdminBro.bundle('../../components/album-tracks.list.tsx'),
			},
			isVisible: {
				show: true,
				edit: true,
				filter: false,
				list: true
			},
		},
		cover: {
			isVisible: false,
		},
		description: {
			type: 'richtext',
			isVisible: {
				show: true,
				edit: true,
				filter: false,
				list: false
			}
		},
	},
	actions: {
		new: {
			after: uploadAfterHook,
		},
		edit: {
			after: uploadAfterHook,
		},
	}
};

module.exports = {
	options,
	features: [
		uploadFeature({
			provider: { local: { bucket: path.join(__dirname + '../../../../../uploads') }},
			multiple: true,
			properties: {
				file: 'tracks',
				filePath: 'tracks.path',
				filename: 'tracks.filename',
				filesToDelete: 'tracks.toDelete',
				key: 'tracks.key',
				mimeType: 'tracks.mimeType',
				bucket: 'tracks.bucket',
			}
		}),
		uploadFeature({
			provider: { local: { bucket: path.join(__dirname + '../../../../../uploads') }},
			properties: {
				file: 'coverFile',
				filePath: 'cover.path',
				filename: 'cover.filename',
				filesToDelete: 'cover.toDelete',
				key: 'cover.key',
				mimeType: 'cover.mimeType',
				bucket: 'cover.bucket',
			}
		}),
	],
	resource: Album,
};
