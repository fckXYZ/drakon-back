const { Router } = require('express')
const paginate = require('../../services/paginate.service')
const { Settings } = require('../../models/Settings/basicSettings/settings.model')
const { CompanyInfo } = require('../../models/Footer/companyInfo/companyInfo.model')
const { SocialList } = require('../../models/Footer/socialLinks/socialList.model')
const { Video } = require('../../models/Additional/video/video.model')
const { BottomDocs } = require('../../models/Footer/UAandPP/bottomDocs.model')
const { Logo } = require('../../models/Branding/logo.model')
const { FavIcon } = require('../../models/Branding/favIcon.model')
const { CompanyName } = require('../../models/Branding/companyName.model')

const router = new Router()

const serializer = (post) => {
	return post.toObject({ versionKey: false })
}

// Get settings
router.get('/', async (req, res) => {
	const settings = Settings.find({}).select('-_id')
		.then((res) => res && res.length ? res[0] : {})
	const info = CompanyInfo.find({}).select('-_id')
		.then((res) => res && res.length ? res[0] : {})
	const socialLinks = SocialList.find({})
		.then((res) => res ? res : [])
	const video = Video.find({}).select('-_id').populate('language', 'languageLocale')
		.then((res) => res ? res : [])
	const bottomDocs = BottomDocs.find({}).select('-_id').populate('language', 'languageLocale')
		.then((res) => {
			if (!res) {
				return [];
			}
			return {
				usersAgreement: {
					ru: res.find((doc) => doc.name === 'Users agreement' && doc.language.languageLocale === 'ru'),
					en: res.find((doc) => doc.name === 'Users agreement' && doc.language.languageLocale === 'en')
				},
				privacyPolicy: {
					ru: res.find((doc) => doc.name === 'Privacy policy' && doc.language.languageLocale === 'ru'),
					en: res.find((doc) => doc.name === 'Privacy policy' && doc.language.languageLocale === 'en')
				}
			}
		})
	const logo = Logo.find({}).select('-_id')
		.then((res) => res ? res[0].file : '')
	const favIcon = FavIcon.find({}).select('-_id')
		.then((res) => res ? res[0].file : '')
	const companyName = CompanyName.find({}).select('-_id')
		.then((res) => res ? res[0].name : '')

	Promise.all([settings, info, socialLinks, video, bottomDocs, logo, favIcon, companyName])
		.then((values) => {
			const settingsObj = {
				settings: values[0],
				companyInfo: values[1],
				socialLinks: values[2],
				video: values[3],
				bottomDocs: values[4],
				branding: {
					logo: values[5],
					favIcon: values[6],
					companyName: values[7]
				}
			}
			res.send(settingsObj)
		})
		.catch(err => res.status(500).send(err))
})

// Add posts
router.post('/', async (req, res) => {
	const post = await new Settings(req.body.post).save()
	res.send(serializer(post))
})

// Delte posts

module.exports = router;
