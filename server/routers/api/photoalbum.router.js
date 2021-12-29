const { Router } = require('express')

const PhotoAlbum = require('../../models/Content/photoAlbum/photoAlbum.model')

const router = new Router()

router.get('/', async (req, res) => {
	PhotoAlbum.find({})
		.then((data) => {
			if (!data.length) {
				return res.status(404).send({ message: 'No albums yet!' })
			}
			res.send(data[0].photosForFront ? data[0].photosForFront : [])
		})

})

module.exports = router;
