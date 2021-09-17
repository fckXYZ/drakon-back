const { Router } = require('express')
const paginate = require('../../services/paginate.service')

const { Faq } = require('../../models/Content/faq/faq.model')
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

  // All posts
  router.get('/:lang', async (req, res) => {
    const posts = await paginate(Faq.find({
      language: await languageID(req),
    }), req)

    res.send(posts.map(serializer))
  })

// Add posts
router.post('/', async (req, res) => {
  const post = await new Faq(req.body.post).save()
  res.send(serializer(post))
})

// Delte posts

module.exports = router;
