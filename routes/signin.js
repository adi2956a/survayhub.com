var express = require('express');
var router = express.Router();

var database = require('../mysql');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('signin', { title: 'Express',session : req.session });
});



router.post('/login_adi', function(request, response, next){
  // console.log(" hi body i am post");
  var user_email_address = request.body.user_email_address;

  var user_password = request.body.user_password;

  if(user_email_address && user_password)
  {
      console.log(" hi body i am if");

      query = `
      SELECT * FROM users 
      WHERE email = "${user_email_address}"
      `;

      database.query(query, function(error, data){

          console.log(user_password);

          console.log( data.lenght);
          if(data.length > 0)
          {    console.log(" hi body i am done");
              for(var count = 0; count < data.length; count++)
              {console.log(" hi body i am done2");
                  if(data[count].password == user_password)
                  {
                      request.session.email = data[count].email;
                      // console.log(" hi body i am done3");
                      response.redirect("/home");
                  }
                  else
                  {
                    
                    const message = 'incorrect password';
                    const error = {
                      status: 401,
                      stack: 'Error stack trace goes here'
                    };
                    response.render('error.ejs', { message, error });
                  }
              }
          }
          else
          {
            //   response.send('');
              const message = 'Incorrect Email Address';
              const error = {
                status: 401,
                stack: 'Error stack trace goes here'
              };
              response.render('error.ejs', { message, error });
          }
          response.end();
      });
  }
  else
  {
    //   response.send('Please Enter Email Address and Password Details');
      const message = 'Please Enter Email Address and Password Details';
              const error = {
                status: 401,
                stack: 'Error stack trace goes here'
              };
              response.render('error.ejs', { message, error });
      response.end();
  }

});


router.get('/logout', function(request, response, next){

    request.session.destroy();

    response.redirect("/");

});

module.exports = router;

