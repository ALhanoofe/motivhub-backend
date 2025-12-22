const { Schema } = require('mongoose')

const channelSchema = new Schema(
  {
    owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    description: { type: String },
  },
  { timestamps: true }
)

module.exports = channelSchema
