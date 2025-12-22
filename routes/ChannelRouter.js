const router = require('express').Router()
const controller = require('../controllers/ChannelController')
const middleware = require('../middleware')


router.get('/', controller.GetChannels)


router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateChannel
)

router.post(
  '/join/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.JoinChannel
)

module.exports = router
