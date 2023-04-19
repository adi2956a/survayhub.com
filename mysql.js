const mysql = require('mysql');

const db = mysql.createConnection({
	host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'info'
});

// db.connect(function (error) {
// 	if (error) {
// 		throw error;
// 	}
// 	else {
// 		console.log('MySQL Database is connected Successfully');
// 	}
// });

module.exports = db ;