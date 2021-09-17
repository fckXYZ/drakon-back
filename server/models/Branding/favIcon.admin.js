const AdminBro = require('admin-bro')
const { FavIcon } = require('./favIcon.model')

const {
	after: uploadAfterHook,
	before: uploadBeforeHook
} = require('../actions/upload-file.hook')


/**@type {AdminBro.ResourceOptions} */
const options = {
	parent: {
		name: 'Branding'
	},
	properties: {
		_id: {
			isVisible: false
		},
		uploadFile: {
			components: {
				edit: AdminBro.bundle('../components/upload-file.edit.tsx'),
				list: AdminBro.bundle('../components/upload-file.list.tsx'),
			},
			isVisible: {
				show: true,
				edit: true,
				filter: false,
				list: true
			},
			custom: {
				size: 'Размер - 48 на 48 пикселей',
				format: 'Поддерживаемые файлы: ICO'
			}
		},
	},
	actions: {
		new: {
			after: uploadAfterHook,
			before: uploadBeforeHook,
		},
		edit: {
			after: uploadAfterHook,
			before: uploadBeforeHook,
		},
		show: {
			isVisible: false,
		},
	}
}

module.exports = {
	options,
	resource: FavIcon
}
