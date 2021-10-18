const AdminBro = require('admin-bro');
const Album = require('./album.model');
const uploadFeature = require('@admin-bro/upload')
const path = require("path");
const { BaseProvider } = require('@admin-bro/upload')
const { ActionContext, UploadedFile } = require('admin-bro')
const { promises, existsSync } = require("fs")

class UploadProvider extends BaseProvider {
	constructor(bucket, assetPath) {
		// it requires bucket as a parameter to properly pass it to other methods
		super(bucket)

		this.assetPath = assetPath
	}

	async upload(file, key, context) {
		const fullPath = path.resolve(this.assetPath, key)
		const dirPath = path.dirname(fullPath)

		if (!existsSync(dirPath)) {
			await promises.mkdir(dirPath, { recursive: true })
		}
		await promises.copyFile(file.path, fullPath)
		await promises.unlink(file.path)
		return key
	}

	async delete(key, bucket, context) {
		const filePath = path.resolve(this.assetPath, key)

		if (existsSync(filePath)) {
			await promises.unlink(filePath)
			const dirPath = path.dirname(filePath)
			const otherFiles = await promises.readdir(dirPath)
			if (otherFiles && otherFiles.length == 0) {
				await promises.rmdir(dirPath)
			}
		}
	}

	path(key, bucket, context) {
		return "/" + bucket + "/" + key
	}
}

const tracksProvider = new UploadProvider('uploads', 'uploads')
const coverProvider = new UploadProvider('uploads', 'uploads')

const {
	after: uploadAfterHook,
} = require('../../actions/upload-album.hook')

const validationTracks = {
	mimeTypes: ['audio/mpeg', 'audio/x-wav', 'audio/x-ms-wma'],
}

const validationCover = {
	mimeTypes: ['image/jpeg', 'image/png'],
}

const options = {
	parent: {
		name: 'Content',
	},
	properties: {
		_id: {
			isVisible: false,
		},
		title: {
			position: 1,
		},
		description: {
			position: 2,
		},
		coverReqs: {
			components: {
				edit: AdminBro.bundle('../../components/text-reqs.jsx'),
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
		uploadCover: {
			position: 4,
		},
		tracksReqs: {
			components: {
				edit: AdminBro.bundle('../../components/text-reqs.jsx'),
			},
			isVisible: {
				show: false,
				edit: true,
				filter: false,
				list: false,
			},
			custom: {
				title: 'Требования к загружвемым аудио.',
				text: 'Формат: MP3, WAV, WMA. Максимальный размер файла - 20mb'
			},
			position: 5,
		},
		uploadTracks: {
			position: 6,
		},
		tracksForFront: {
			components: {
				edit: AdminBro.bundle('../../components/tracklist.list.jsx'),
			},
			isVisible: {
				show: false,
				edit: true,
				list: false,
				filter: false,
			},
			isArray: true,
			position: 8,
		},
		cover: {
			isVisible: false,
		},
		tracks: {
			isVisible: false
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
	}

module.exports = {
	options,
	features: [
		uploadFeature({
			provider: tracksProvider,
			multiple: true,
			properties: {
				key: 'tracks.path',
				bucket: 'tracks.folder',
				mimeType: 'tracks.mimeType',
				size: 'tracks.size',
				filename: 'tracks.filename',
				filePath: 'tracks.filePath',
				filesToDelete: 'tracks.filesToDelete',
				file: 'uploadTracks',
			},
			validationTracks,
		}),
		uploadFeature({
			provider: coverProvider,
			properties: {
				key: 'cover.key',
				bucket: 'cover.bucket',
				mimeType: 'cover.mimeType',
				size: 'cover.size',
				filename: 'cover.fileName',
				filePath: 'cover.filePath',
				filesToDelete: 'cover.filesToDelete',
				file: 'uploadCover',
			},
			validationCover
		}),
	],
	resource: Album,
};
