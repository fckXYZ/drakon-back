const { Router } = require('express')
const { Settings } = require('../../models/Content/settings/settings.model')
const {Contacts} = require("../../models/Content/contacts/contacts.model");
const { BottomDocs } = require('../../models/Footer/UAandPP/bottomDocs.model')

const router = new Router()

// Get video albums
router.get('/', async (req, res) => {
	const settings = await Settings.find({}).select('-_id');
	const contacts = await Contacts.find({}).select('-_id');
	const bottomDocs = await BottomDocs.find({}).select('-_id').populate('language', 'languageLocale')
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


	res.send({
		settings: settings && settings.length ? settings[0] : {},
		contacts: contacts && contacts.length ? contacts[0] : {},
		bottomDocs,
	});
})

module.exports = router;
