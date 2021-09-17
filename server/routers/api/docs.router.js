const { Router } = require('express')
const paginate = require('../../services/paginate.service')

const { Docs } = require('../../models/Footer/docs/docs.model')
const { Language } = require('../../models/Content/language/language.model')

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
router.get('/:lang', async (req, res) => {
  const posts = await paginate(Docs.find({
    language: await languageID(req)
  }), req)

  res.send(posts.map(serializer))
})

// Add posts
router.post('/', async (req, res) => {
  const post = await new Docs(req.body.post).save()
  res.send(serializer(post))
})

// Delte posts

module.exports = router;
