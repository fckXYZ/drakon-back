const { Router } = require('express')
const getMP3Duration = require('get-mp3-duration')
const Album = require('../../models/Content/album/album.model')
const fs = require("fs");



const router = new Router()

// Get video albums
router.get('/', async (req, res) => {
	const albums = await Album.find({});
	const albumsForRes = [];
	albums.map((album) => {
		albumsForRes.push({
			title: album.title,
			_id: album._id,
			tracks: album.tracks,
			cover: `/uploads/${album._id}/${album.cover.filename}`,
			description: album.description,
		})
	})
	res.send(albumsForRes);
})

module.exports = router;
