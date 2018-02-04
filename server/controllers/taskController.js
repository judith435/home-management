var bl = require('../bl/taskBL');
var model = require('../models/taskModel');

function getTasks(callback) {

    bl.Tasks.getTasks(function(err, taskArray) {
        if (err) {
            callback(err);
        }
        callback(null, taskArray);
    })
}

function addTask(req, callback) {
    console.log('>>> taskController: ' + req.query); // get req.body the body data of get
    const task = new model.Task(JSON.parse(req.query.task));
    
    //perform server side validations on task


    bl.Tasks.addTask(task, function(err, result) {
        if (err) {
            callback(err);
        }
        callback(null, result);
    })
}


module.exports.getTasks = getTasks;
module.exports.addTask = addTask;