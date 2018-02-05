var bl = require('../bl/taskBL');
var model = require('../models/taskModel');
var validations = require('../share/validations');

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

    let validationErrors = '';
    //server side validations
    if (!validations.inputNotEmpty(task.description)) {
        validationErrors = 'task description cannot be empty';
    }

    if (!validations.inputNotEmpty(task.familyMember)) {
        validationErrors += validationErrors ? ', ' : '' ;
        validationErrors += 'please select family member';
    }

    if (validationErrors) {
        callback(validationErrors);
    }
    else ( // no validation errors

        bl.Tasks.addTask(task, function(err, result) {
            if (err) {
                callback(err);
            }
            callback(null, result);
        })
    )
}

function deleteTask(req, callback) {

    const task = new model.Task(JSON.parse(req.query.task));
    
    bl.Tasks.deleteTask(task, function(err, result) {
        if (err) {
            callback(err);
        }
        callback(null, result);
    })
}

module.exports.getTasks = getTasks;
module.exports.addTask = addTask;
module.exports.deleteTask = deleteTask;