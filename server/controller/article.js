var modelArticle = require('../model/article')
var jwt =  require('jsonwebtoken')
var helper = require('../helper/helper')
require('dotenv').config()

var createArticle = function(req, res) {
  modelArticle.create({
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
    author: req.headers.authentic
  })
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
}

var getArticle = function(req, res) {
  modelArticle.find()
  .populate({path:'author', model:'User'})
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
}

var editArticle = function(req, res) {
  modelArticle.findByIdAndUpdate({
    _id: req.params.id
  }, {
    title: req.body.title,
    content: req.body.content,
    category: req.category,
    author:req.headers.authentic
  })
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
}

var delArticle = function(req, res) {
  modelArticle.findByIdAndRemove({
    _id: req.params.id
  })
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
}

module.exports = {
  createArticle,
  getArticle,
  editArticle,
  delArticle
}
