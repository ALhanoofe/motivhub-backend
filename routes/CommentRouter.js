const router = require('express').Router()
const controller = require('../controllers/CommentController')
const middleware = require('../middleware')

router.get('/', controller.GetComments)
router.get('/post/:postId', controller.GetCommentsByPost)

router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateComment
)

router.put(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateComment
)

router.delete(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteComment
)

module.exports = router