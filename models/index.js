const mongoose = require('mongoose')
const userSchema = require('./User')
const postSchema = require('./Post')
const channelSchema = require('./Channel')
const commentSchema = require('./Comment')

const User = mongoose.model('User', userSchema)
const Post = mongoose.model('Post', postSchema)
const Channel = mongoose.model('Channel', channelSchema)
const Comment = mongoose.model('Comment', commentSchema)

module.exports = {
  User,
  Post,
  Channel,
  Comment
}


