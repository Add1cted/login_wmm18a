var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');

var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'blee',
	password : 'Blee',
	database : 'login_wmm18a'
});

var app = express();
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
/*module.exports = params => {
    router.post('/', (request, response) => {
        console.log(req.form);
        var user = req.form.name;
        var pass = req.form.pass;
        var mail = req.form.email;
        connection.connect(function(err) {  
            if (err) throw err;
            console.log("Connected!");
            var sql = "INSERT INTO accounts (username, password, email) VALUES (user, pass, mail)";
            con.query(sql, function (err, result) {
                if (err) throw err;
                console.log("1 record inserted");
            });
        });
    });
}*/