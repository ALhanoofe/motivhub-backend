const { Channel } = require('../models')

const GetChannels = async (req, res) => {
  try {
    const channels = await Channel.find({})
    res.status(200).send(channels)
  } catch (error) {
    throw error
  }
}

const GetChannelById = async (req, res) => {
  try {

    const channels = await Channel.findById(req.params.id)
    res.status(200).send(channels)
  } catch (error) {
    throw error
  }
}

const CreateChannel = async (req, res) => {
  try {
    const channel = await Channel.create(req.body)
    res.status(200).send(channel)
  } catch (error) {
    throw error
  }
}

const UpdateChannel = async (req, res) => {
  try {
    const channel = await Channel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    res.status(200).send(channel)
  } catch (error) {
    throw error
  }
}

const DeleteChannel = async (req, res) => {
  try {
    await Channel.deleteOne({ _id: req.params.id })
    res.status(200).send({ msg: 'Channel Deleted', id: req.params.id })
  } catch (error) {
    throw error
  }
}


module.exports = {
  GetChannels,
  GetChannelById,
  CreateChannel,
  UpdateChannel,
  DeleteChannel
}
