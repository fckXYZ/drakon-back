const { Router } = require('express')
const paginate = require('../../services/paginate.service')
const { AffiliateProgram } = require('../../models/Settings/affiliate/affiliateProgram.model')

const router = new Router()

const serializer = (post) => {
  return post.toObject({ versionKey: false })
}

// Get posts
router.get('/', async (req, res) => {
  const posts = await paginate(AffiliateProgram.find({}), req)
  res.send(posts.map(serializer))
})

// Add posts
router.post('/', async (req, res) => {
  const post = await new AffiliateProgram(req.body.post).save()
  res.send(serializer(post))
})

// Delte posts

module.exports = router;
