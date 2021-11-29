const { Router } = require('express')
const About = require('../../models/Content/about/about.model')
const paginate = require("../../services/paginate.service");
const {Language} = require("../../models/Content/language/language.model");



const router = new Router()

const languageID = async (req) => {
	const languageId = await paginate(Language.find({
		languageLocale: req.params.lang,
	}), req)
	return languageId[0]._id
}

// Get about
router.get('/:lang', async (req, res) => {
	const about = await About.find({
		language: await languageID(req),
	}).select(['-_id', '-language', '-__v']);
	res.send(about[0]);
})

module.exports = router;
