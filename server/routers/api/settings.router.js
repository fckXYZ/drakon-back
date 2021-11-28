const { Router } = require('express')
const { Settings } = require('../../models/Content/settings/settings.model')
const {Contacts} = require("../../models/Content/contacts/contacts.model");

const router = new Router()

// Get video albums
router.get('/', async (req, res) => {
	const settings = await Settings.find({}).select('-_id');
	const contacts = await Contacts.find({}).select('-_id');

	res.send({
		settings: settings && settings.length ? settings[0] : {},
		contacts: contacts && contacts.length ? contacts[0] : {}
	});
})

module.exports = router;
