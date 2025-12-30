const router = require('express').Router()
const controller = require('../controllers/PostController')
const middleware = require('../middleware')
const upload = require('../middleware/upload')


router.get('/', controller.GetPosts)

router.get('/:id', controller.GetPostById)

router.get('/channel/:channelId', controller.GetPostsByChannel)

router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  upload.single('image'),
  controller.CreatePost
)
router.put(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdatePost
)
router.delete(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeletePost
)

module.exports = router
