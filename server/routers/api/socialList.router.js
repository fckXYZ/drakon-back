const { Router } = require('express')
const paginate = require('../../services/paginate.service')
const { SocialList } = require('../../models/Footer/socialLinks/socialList.model')

const router = new Router()

const serializer = (post) => {
  return post.toObject({ versionKey: false })
}

// Get posts
router.get('/', async (req, res) => {
  const posts = await paginate(SocialList.find({}).select('-_id'), req)
  res.send(posts.map(serializer))
})

// Add posts
router.post('/', async (req, res) => {
  const post = await new SocialList(req.body.post).save()
  res.send(serializer(post))
})

// Delte posts

module.exports = router;
