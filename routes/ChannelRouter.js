const router = require('express').Router()
const controller = require('../controllers/ChannelController')
const middleware = require('../middleware')

router.get('/', controller.GetChannels)
router.get('/:id', controller.GetChannelById)
router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateChannel
)

router.put(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateChannel
)

router.delete(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteChannel
)

module.exports = router
