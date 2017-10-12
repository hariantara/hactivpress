var mongoose = require('mongoose')

var Schema = mongoose.Schema

var ArticleSchema = new Schema({
  title: String,
  content: String,
  category: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

var Article = mongoose.model('Article', ArticleSchema)
module.exports = Article
