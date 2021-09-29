const { Router } = require('express')
const VideoAlbum = require('../../models/Content/videoAlbum/videoAlbum.model')

const router = new Router()

// Get video albums
router.get('/', async (req, res) => {
  const videos = await VideoAlbum.find({});
  let videosForRes = []

  // making photos array in each video for front
  videos.map((video) => {
    let photosForRes = []
    if (video.photos && Object.keys(video.photos).length) {
      video.photos.key.map((photo) => {
        photosForRes.push(`/uploads/${photo}`);
      })

    }
    videosForRes.push({
      title_ru: video.title_ru,
      title_en: video.title_en,
      url: video.url,
      photos: photosForRes,
    })
  })

  res.send(videosForRes);
})

module.exports = router;
