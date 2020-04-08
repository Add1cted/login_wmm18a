const express = require("express");
const router = express.Router();
const mysqlConnection = require("../data/connection");

module.exports = params => {
	router.get('/', function(request, response) {
		response.sendFile(path.join(__dirname + '/login.ejs'));
	});

	router.post('/auth', function(request, response) {
		var username = request.body.username;
		var password = request.body.password;
		if (username && password) {
			connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
				if (results && (results.length > 0)) {
					request.session.loggedin = true;
					request.session.username = username;
					response.redirect('/home');
				} else {
					response.send('Incorrect Username and/or Password!');
				}
				response.end();
			});
		} else {
			response.send('Please enter Username and Password!');
			response.end();
		}
	});

	router.get('/courses/table', function(request, response) {
		if (request.session.loggedin) {
			response.send('Welcome back, ' + request.session.username + '!');
		} else {
			response.send('Please login to view this page!');
		}
		response.end();
	});

	/*router.get('/signup', function(request, response){
		response.sendFile(path.join(__dirname + '/signup.ejs'));
	});*/

	return router;
}
