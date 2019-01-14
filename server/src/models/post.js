const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema(
  {
    category: { type: String },
    title: { type: String, required: true },
    body: { type: String }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Post', PostSchema)