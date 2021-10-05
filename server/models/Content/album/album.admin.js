const AdminBro = require('admin-bro');
const Album = require('./album.model');
const uploadFeature = require('@admin-bro/upload')
const path = require("path");

const validationTracks = {
	mimeTypes: ['audio/mpeg', 'audio/x-wav', 'audio/x-ms-wma'],
}

const validationCover = {
	mimeTypes: ['image/jpeg', 'image/png'],
}

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
		coverFile: {
			isVisible: {
				list: false,
				show: false,
				edit: true,
				filter: false
			},
			position: 2,
		},
		cover: {
			components: {
				list: AdminBro.bundle('../../components/album-preview.list.jsx'),
				show: AdminBro.bundle('../../components/album-preview.list.jsx'),
			},
			isVisible: {
				show: true,
				edit: false,
				filter: false,
				list: true
			},
			position: 2,
		},
		tracklist: {
			components: {
				list: AdminBro.bundle('../../components/tracklist.list.jsx'),
				show: AdminBro.bundle('../../components/tracklist.list.jsx'),
			},
			isVisible: {
				show: true,
				edit: false,
				filter: false,
				list: true
			},
			position: 3,
		},
		tracks: {
			isVisible: {
				list: false,
				show: false,
				edit: true,
				filter: false
			},
			position: 4,
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
		photosReqs: {
			components: {
				edit: AdminBro.bundle('../../components/text-reqs.jsx'),
				show: AdminBro.bundle('../../components/text-reqs.jsx'),
			},
			isVisible: {
				show: false,
				edit: true,
				filter: false,
				list: false,
			},
			custom: {
				title: 'Требования к обложке.',
				text: 'Формат: PNG, JPG/JPEG. Для лучшего отображения использовать квадратное изображение. Максимальный размер файла - 10mb'
			},
			position: 3,
		},
		tracksReqs: {
			components: {
				edit: AdminBro.bundle('../../components/text-reqs.jsx'),
				show: AdminBro.bundle('../../components/text-reqs.jsx'),
			},
			isVisible: {
				show: false,
				edit: true,
				filter: false,
				list: false,
			},
			custom: {
				title: 'Требования к загружвемым аудио.',
				text: 'Формат: MP3, WAV, WMA. Максимальный размер файла - 10mb'
			},
			position: 5,
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
			},
			validationTracks,
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
			},
			validationCover
		}),
	],
	resource: Album,
};
