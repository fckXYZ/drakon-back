const {default: AdminBro} = require('admin-bro')
const AdminBroMongoose = require('@admin-bro/mongoose')

AdminBro.registerAdapter(AdminBroMongoose)

const AdminPost = require('../models/Content/post/post.admin')
const Language = require('../models/Content/language/language.admin')
const PhotoAlbum = require('../models/Content/photoAlbum/photoAlbum.admin')
const VideoAlbum = require('../models/Content/videoAlbum/videoAlbum.admin')
const Album = require('../models/Content/album/album.admin')
const About = require('../models/Content/about/about.admin')
const Settings = require('../models/Content/settings/settings.admin')
const Contacts = require('../models/Content/contacts/contacts.admin')

/**@type {import ('admin-bro').AdminBroOptions} */
const options = {
	resources: [
		AdminPost,
		Language,
		PhotoAlbum,
		VideoAlbum,
		Album,
		About,
		Settings,
		Contacts
	],
	branding: {
		companyName: 'Drakon Admin Panel',
	},
	locale: {
		translations: {
			labels: {
				Contacts: 'Контакты/Медиа-ссылки',
				Language: 'Языки',
				Post: 'Новости',
                photoAlbum: 'Фотоальбом',
                videoAlbum: 'Видеоальбомы',
                album: 'Музыка',
                about: 'О группе',
				settings: 'Настройки'
			}
		}
	},

}

module.exports = options
