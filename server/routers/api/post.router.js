const { Router } = require('express')
const paginate = require('../../services/paginate.service')

const { Post } = require('../../models/Content/post/post.model')
const { Language } = require('../../models/Content/language/language.model')
const postTypes = require('../../constants/postTypes');

const router = new Router()

const serializer = (post) => {
  return post.toObject({ versionKey: false })
}

const languageID = async (req) => {
  const languageId = await paginate(Language.find({
    languageLocale: req.params.lang,
  }), req)
  return languageId[0]._id
}

// Get posts

  // All posts
  router.get('/:lang', async (req, res) => {
    const posts = await paginate(Post.find({
      language: await languageID(req),
    }).sort({ date: -1 }), req)

    res.send(posts.map(serializer))
  })

  // Blog posts
  router.get('/:lang', async (req, res) => {
    const posts = await paginate(Post.find({
      language: await languageID(req),
    }).sort({ date: -1 }), req)
    res.send(posts.map(serializer))
  })

  // Get posts/:id
  router.get('/:lang/:postUrl', async (req, res) => {
    const posts = await paginate(Post.find({
      language: await languageID(req),
      postUrl: req.params.postUrl
    }), req)
    res.send(posts.map(serializer))
  })

// Add posts
router.post('/', async (req, res) => {
  const post = await new Post(req.body.post).save()
  res.send(serializer(post))
})

// Delte posts

module.exports = router;
