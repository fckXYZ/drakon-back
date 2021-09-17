const { default: AdminBro } = require('admin-bro')
const AdminBroMongoose = require('@admin-bro/mongoose')

AdminBro.registerAdapter(AdminBroMongoose)

const AdminPost = require('../models/Content/post/post.admin')
const AdminSocialList = require('../models/Footer/socialLinks/socialList.admin')
const AdminDocs = require('../models/Footer/docs/docs.admin')
const AdminVideo = require('../models/Additional/video/video.admin')
const AdminFees = require('../models/Settings/fees/fees.admin')
const AdminAffiliateProgram = require('../models/Settings/affiliate/affiliateProgram.admin')
const Faq = require('../models/Content/faq/faq.admin')
const Member = require('../models/Content/member/member.admin')
const Settings = require('../models/Settings/basicSettings/settings.admin')
const CompanyInfo = require('../models/Footer/companyInfo/companyInfo.admin')
const Logo = require('../models/Branding/logo.admin')
const FavIcon = require('../models/Branding/favIcon.admin')
const BottomDocs = require('../models/Footer/UAandPP/bottomDocs.admin')
const CompanyName = require('../models/Branding/companyName.admin')
const Language = require('../models/Content/language/language.admin')
const PhotoAlbum = require('../models/Content/photoAlbum/photoAlbum.admin')
const VideoAlbum = require('../models/Content/videoAlbum/videoAlbum.admin')
const Album = require('../models/Content/album/album.admin')

/**@type {import ('admin-bro').AdminBroOptions} */
const options = {
  resources: [
    AdminPost,
    AdminSocialList,
    AdminDocs,
    AdminVideo,
    AdminFees,
    AdminAffiliateProgram,
    Faq,
    Member,
    Language,
    Settings,
    CompanyInfo,
    Logo,
    FavIcon,
    CompanyName,
    BottomDocs,
      PhotoAlbum,
      VideoAlbum,
      Album
  ],
  branding: {
    companyName: 'Drakon Admin Panel',
  },
  locale: {
    translations: {
      labels: {
        Member: 'Участники группы',
        Settings: 'Основные настройки',
        SocialList: 'Ссылки на соцсети',
        Language: 'Языки',
        Post: 'Новости',
        AffiliateProgram: 'Условия партнерской программы',
        CompanyInfo: 'Информация о компании',
        Logo: 'Логотип',
        FavIcon: 'Фавикон',
        BottomDocs: 'Польз. соглашение и политика конф.',
        CompanyName: 'Название компании'
      }
    }
  },

}

module.exports = options
