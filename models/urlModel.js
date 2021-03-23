import mongoose from 'mongoose'

const urlSchema = new mongoose.Schema({
  urlCode: String,
  longUrl: String,
  shortUrl: String,
  date: {
    type: String,
    default: Date.now()
  }
}, {timestamps: true})

const Url = mongoose.model('Url', urlSchema)

export default Url;
