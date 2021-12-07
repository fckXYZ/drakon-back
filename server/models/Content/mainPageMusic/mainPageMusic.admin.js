const AdminBro = require('admin-bro');
const MainPageMusic = require('./mainPageMusic.model');

const {
	after: uploadAfterHook,
	before: uploadBeforeHook
} = require('../../actions/upload-file.hook')

const options = {
	parent: {
		name: 'Content',
	},
	properties: {
		_id: {
			isVisible: false,
		},
		uploadFile: {
			components: {
				edit: AdminBro.bundle('../../components/upload-file.edit.tsx'),
				list: AdminBro.bundle('../../components/upload-file.list.tsx'),
			},
			isVisible: {
				show: true,
				edit: true,
				filter: false,
				list: true
			},
			custom: {
				title: 'Трек',
				text: 'Поддерживаемые форматы: mp3, wav. Максимальный размер файла - 10mb',
			}
		},
		file: {
			isVisible: false
		}
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
	resource: MainPageMusic,
};
