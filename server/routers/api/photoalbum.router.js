const { Router } = require('express')

const PhotoAlbum = require('../../models/Content/photoAlbum/photoAlbum.model')

const router = new Router()

router.get('/', async (req, res) => {
	PhotoAlbum.find({})
		.then((data) => {
			if (!data.length) {
				return res.status(404).send({ message: 'No albums yet!' })
			}
			const photos = [];
			data[0].photos.key.map((file) => {
				photos.push(`/uploads/${file}`)
			})
			res.send(photos)
		})

})

module.exports = router;
