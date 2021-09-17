const { Router } = require('express')
const paginate = require('../../services/paginate.service')
const { Member } = require('../../models/Content/member/member.model')

const router = new Router()

const serializer = (post) => {
  return post.toObject({ versionKey: false })
}

// Get members
router.get('/', async (req, res) => {
  const members = await paginate(Member.find({}), req)
  res.send(members.map(serializer))
})

module.exports = router;
