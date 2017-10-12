var express = require('express');
var router = express.Router();
var jwt =  require('jsonwebtoken')
var controller = require('../controller/article')
var helper = require('../helper/helper')

const auth = (req, res, next) =>
{
  // console.log(req.headers.token);
  if(req.headers.hasOwnProperty('token')){
    var decoded = jwt.verify(req.headers.token, process.env.SECRETKEY);
    if(decoded.role == 'user')
    {
      req.headers.authentic = decoded
      next()
    }
    else {
      res.send('maaf anda belum terdaftar')
    }
  }
  else {
    res.send('you should login')
  }
  // console.log("DECODED: ",decoded)
}


router.post('/', auth, controller.createArticle)
router.get('/', controller.getArticle)
router.put('/:id', auth, controller.editArticle)
router.delete('/:id', auth, controller.delArticle)

module.exports = router
