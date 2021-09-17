const { Router } = require('express')
const paginate = require('../../services/paginate.service')
const Language = require('../../models/language.model')

const router = new Router()

const serializer = (post) => {
  return post.toObject({ versionKey: false })
}

// Get posts
router.get('/', async (req, res) => {
  const posts = await paginate(Post.find({}), req)
  res.send(posts.map(serializer))
})

// Add posts
router.post('/', async (req, res) => {
  const post = await new Language(req.body.post).save()
  res.send(serializer(post))
})

// Delte posts

module.exports = router;