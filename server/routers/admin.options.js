const {default: AdminBro} = require('admin-bro')
const AdminBroMongoose = require('@admin-bro/mongoose')

AdminBro.registerAdapter(AdminBroMongoose)

const AdminPost = require('../models/Content/post/post.admin')
const Language = require('../models/Content/language/language.admin')
const PhotoAlbum = require('../models/Content/photoAlbum/photoAlbum.admin')
const VideoAlbum = require('../models/Content/videoAlbum/videoAlbum.admin')
const Album = require('../models/Content/album/album.admin')
const MainPageMusic = require('../models/Content/mainPageMusic/mainPageMusic.admin')
const About = require('../models/Content/about/about.admin')
const Settings = require('../models/Content/settings/settings.admin')
const Contacts = require('../models/Content/contacts/contacts.admin')
const DiscographyText = require('../models/Content/discographyText/discographyText.admin')

/**@type {import ('admin-bro').AdminBroOptions} */
const options = {
	resources: [
		AdminPost,
		Language,
		PhotoAlbum,
		VideoAlbum,
		Album,
		MainPageMusic,
		About,
		Settings,
		Contacts,
		DiscographyText,
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
                mainPageMusic: 'Треки для главной страницы',
                about: 'О группе',
				settings: 'Настройки',
				DiscographyText: 'Текст в раздел с дискографией'
			}
		}
	},

}

module.exports = options
