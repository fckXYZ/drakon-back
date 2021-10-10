const { Router } = require('express')
const { Settings } = require('../../models/Content/settings/settings.model')

const router = new Router()

// Get video albums
router.get('/', async (req, res) => {
	const settings = await Settings.find({});
	res.send(settings[0]);
})

module.exports = router;
