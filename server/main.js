var express = require('express');
var bodyParser = require("body-parser");

var fs = require('fs');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('../client'));
app.use(express.static('../node_modules'));


var apiFamily = require('./api/familyAPI.js');
var apiTask = require('./api/taskAPI.js');

// Listen to '/' in GET Verb methods - serve the main Angular index.html file
app.get('/', function (req, res) {

    fs.readFile('client/index.html', 'utf8', function (err, data) {
        if (err) {
            console.log(err);
        }
        res.end(data) 
    });
   
});

app.get('/family/ddl', apiFamily.getFamilyDDL);
app.get('/task', apiTask.getTasks);
app.post('/task', apiTask.addTask);
app.delete('/task', apiTask.deleteTask);


// Start the server
var server = app.listen(8081, function () {

})

