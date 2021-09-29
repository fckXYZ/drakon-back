const {default: AdminBro} = require('admin-bro')
const AdminBroMongoose = require('@admin-bro/mongoose')

AdminBro.registerAdapter(AdminBroMongoose)

const AdminPost = require('../models/Content/post/post.admin')
const Member = require('../models/Content/member/member.admin')
const Language = require('../models/Content/language/language.admin')
const PhotoAlbum = require('../models/Content/photoAlbum/photoAlbum.admin')
const VideoAlbum = require('../models/Content/videoAlbum/videoAlbum.admin')
const Album = require('../models/Content/album/album.admin')
const About = require('../models/Content/about/about.admin')

/**@type {import ('admin-bro').AdminBroOptions} */
const options = {
	resources: [
		AdminPost,
		Member,
		Language,
		PhotoAlbum,
		VideoAlbum,
		Album,
		About
	],
	branding: {
		companyName: 'Drakon Admin Panel',
	},
	locale: {
		translations: {
			labels: {
				Member: 'Участники группы',
				Language: 'Языки',
				Post: 'Новости',
                photoAlbum: 'Фотоальбом',
                videoAlbum: 'Видеоальбомы',
                album: 'Музыка',
                about: 'О группе',
			}
		}
	},

}

module.exports = options
