const { Router } = require('express')
const MainPageMusic = require('../../models/Content/mainPageMusic/mainPageMusic.model')
const DiscographyText = require('../../models/Content/discographyText/discographyText.model')
const paginate = require("../../services/paginate.service");
const {Language} = require("../../models/Content/language/language.model");

const router = new Router()

const languageID = async (req) => {
	const languageId = await paginate(Language.find({
		languageLocale: req.params.lang,
	}), req)
	return languageId[0]._id
}

//get music
router.get('/:lang', async(req, res) => {
	const tracks = await MainPageMusic.find({}).select(['-_id', '-__v']);
	const text = await DiscographyText.find({
		language: await languageID(req),
	}).select(['-_id', '-__v']);


	res.send({
		tracks,
		text: text.length ? text[0].text : ''
	});
})

module.exports = router
