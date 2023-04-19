












const express = require('express');
const router = express.Router();
// const mysql = require('mysql');
// const bcrypt = require('bcryptjs');

// Create MySQL connection
const db = require('../mysql')
  


// Connect to MySQL
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});






// Route for rendering registration form
router.get('/', (req, res, next) => {
  return res.render('signup');
});

// Route for handling registration form submission
router.post('/', (req, res, next) => {
  let personInfo = req.body;

  if (!personInfo.email || !personInfo.username || !personInfo.password || !personInfo.passwordConf) {
    res.send();
  } else {
    if (personInfo.password == personInfo.passwordConf) {
      const email = personInfo.email;
      const username = personInfo.username;
      const password = personInfo.password;

      // Check if email is already registered
      db.query('SELECT * FROM users WHERE email = ?', [email], (err, data) => {
        if (err) throw err;
        if (data.length === 0) {
        //   // Generate password hash
        //   bcrypt.genSalt(10, (err, salt) => {
        //     bcrypt.hash(password, salt, (err, hash) => {
        //       if (err) throw err;

        //       // Insert new user into MySQL database
        //       const user = { email: email, username: username, password: hash };
        //       db.query('INSERT INTO users SET ?', user, (err, result) => {
        //         if (err) throw err;
        //         console.log('Success');
        //         res.send({ "Success": "You are registered, you can now login." });
        //       });
        //     });
        //   });

//  Insert new user into MySQL database
              const user = { email: email, username: username, password: password };
              db.query('INSERT INTO users SET ?', user, (err, result) => {
                if (err) throw err;
                console.log('Success');
                res.redirect("/");
              });



        } else {
          // res.send({ "Success": "Email is already used." });
          const message = 'Success": "Email is already used.';
              const error = {
                status: 401,
                stack: 'Error stack trace goes here'
              };
              response.render('error.ejs', { message, error });
        }
      });
    } else {
      // res.send({ "Success": "." });
      const message = 'password not match';
              const error = {
                status: 401,
                stack: 'Error stack trace goes here'
              };
              response.render('error.ejs', { message, error });
      
    }
  }
});

// // Route for rendering login form
// router.get('/login', (req, res, next) => {
//   return res.render('login.ejs');
// });

// // Route for handling login form submission
// router.post('/login', (req, res, next) => {
//   const email = req.body.email;
//   const password = req.body.password;

//   // Check if email exists in MySQL database
//   db.query('SELECT * FROM users WHERE email = ?', [email], (err, data) => {
//     if (err) throw err;
//     if (data.length === 1) {
//       const user = data[0];

//       // Compare password with stored hash
//       bcrypt.compare(password, user.password, (err, result) => {
//         if (err) throw err;
//         if (result) {
//           req.session.userId = user.id;
//           res.send({ "Success": "Success!" });
//         } else {
//           res.send({ "Success": "Wrong password!" });
//         }
//       });
//     } else {
//       res.send({ "Success": "This email is not registered!" });
//     }
//   });
// });

// // Route for rendering profile page
// router.get('/profile', (req, res, next) => {
//   const userId = req.session.userId;

//   // Check if user is logged in
//   if (!userId) {
//     res.redirect('/');
//   } else {
//     // Retrieve user data from MySQL database
//     db.query('SELECT * FROM users WHERE id = ?',
// 	[userId], (err, data) => {
// 		if (err) throw err;
// 		if (data.length === 1) {
// 		  const user = data[0];
// 		  res.render('profile.ejs', { user: user });
// 		} else {
// 		  res.redirect('/');
// 		}
// 	  });
// 	}
//   });
  
//   // Route for handling logout
//   router.get('/logout', (req, res, next) => {
// 	// Destroy session and redirect to login page
// 	req.session.destroy((err) => {
// 	  if (err) throw err;
// 	  res.redirect('/');
// 	});
//   });
  
  module.exports = router;
  













































// var express = require('express');
// var router = express.Router();
// // const mysql = require('mysql');
// const bcrypt = require('bcryptjs');

// // Create MySQL connection
// const db = require('../mysql');

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   return res.render('signup', { title: 'Express' });
// });






// // Connect to MySQL
// db.connect((err) => {
//     if (err) throw err;
//     console.log('Connected to MySQL database');
// });

// // // Route for rendering registration form
// // router.get('/', (req, res, next) => {
// //     return res.render('index.ejs');
// // });

// // Route for handling registration form submission
// router.post('/', (req, res, next) => {
//     let personInfo = req.body;

//     if (!personInfo.email || !personInfo.username || !personInfo.password || !personInfo.passwordConf) {
//     res.send();
//   } else {
//     if (personInfo.password == personInfo.passwordConf) {
//       const email = personInfo.email;
//       const username = personInfo.username;
//       const password = personInfo.password;

//       // Check if email is already registered
//       db.query('SELECT * FROM users WHERE email = ?', [email], (err, data) => {
//         if (err) throw err;
//         if (data.length === 0) {
//           // Generate password hash
//           bcrypt.genSalt(10, (err, salt) => {
//             bcrypt.hash(password, salt, (err, hash) => {
//               if (err) throw err;

//               // Insert new user into MySQL database
//               const user = { email: email, username: username, password: hash };
//               db.query('INSERT INTO users SET ?', user, (err, result) => {
//                 if (err) throw err;
//                 console.log('Success');
//                 res.send({ "Success": "You are registered, you can now login." });
//               });
//             });
//           });
//         } else {
//           res.send({ "Success": "Email is already used." });
//         }
//       });
//     } else {
//       res.send({ "Success": "Passwords do not match." });
//     }
// }
// });

// // Route for rendering login form
// router.get('/login', (req, res, next) => {
//   return res.render('login.ejs');
// });

// // Route for handling login form submission
// router.post('/login', (req, res, next) => {
//   const email = req.body.email;
//   const password = req.body.password;

//   // Check if email exists in MySQL database
//   db.query('SELECT * FROM users WHERE email = ?', [email], (err, data) => {
//     if (err) throw err;
//     if (data.length === 1) {
//       const user = data[0];

//       // Compare password with stored hash
//       bcrypt.compare(password, user.password, (err, result) => {
//         if (err) throw err;
//         if (result) {
//           req.session.userId = user.id;
//           res.send({ "Success": "Success!" });
//         } else {
//           res.send({ "Success": "Wrong password!" });
//         }
//       });
//     } else {
//       res.send({ "Success": "This email is not registered!" });
//     }
//   });
// });

// // Route for rendering profile page
// router.get('/profile', (req, res, next) => {
//   const userId = req.session.userId;

//   // Check if user is logged in
//   if (!userId) {
//     res.redirect('/');
//   } else {
//       // Retrieve user data from MySQL database
//       db.query('SELECT * FROM users WHERE id = ?',
// 	[userId], (err, data) => {
// 		if (err) throw err;
// 		if (data.length === 1) {
//             const user = data[0];
// 		  res.render('profile.ejs', { user: user });
// 		} else {
// 		  res.redirect('/');
// 		}
// 	  });
// 	}
//   });
  
//   // Route for handling logout
//   router.get('/logout', (req, res, next) => {
// 	// Destroy session and redirect to login page
// 	req.session.destroy((err) => {
// 	  if (err) throw err;
// 	  res.redirect('/');
// 	});
//   });
  
  
  
  module.exports = router;