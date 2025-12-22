const { Schema } = require('mongoose')

const commentSchema = new Schema(
  {
    owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    post: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
    content: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = commentSchema
