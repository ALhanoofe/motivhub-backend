const { Comment } = require('../models')

const GetComments = async (req, res) => {
  try {
    const comments = await Comment.find({})
    res.status(200).send(comments)
  } catch (error) {
    throw error
  }
}

const GetCommentsByPost = async (req, res) => {
  try {
    const comments = await Comment.find({ post: req.params.postId })
    res.status(200).send(comments)
  } catch (error) {
    res.status(500).send(error)
  }
}

const CreateComment = async (req, res) => {
  try {
    const comment = await Comment.create(req.body)
    res.status(200).send(comment)
  } catch (error) {
    throw error
  }
}

const UpdateComment = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    res.status(200).send(comment)
  } catch (error) {
    throw error
  }
}

const DeleteComment = async (req, res) => {
  try {
    await Comment.deleteOne({ _id: req.params.id })
    res.status(200).send({ msg: 'Comment Deleted', id: req.params.id })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetComments,
  GetCommentsByPost,
  CreateComment,
  UpdateComment,
  DeleteComment
}