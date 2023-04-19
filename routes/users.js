var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with  resource');
  
});

router.get('/logout', function(request, response, next){

  // request.session.destroy();

  response.redirect("/");

});
module.exports = router;
