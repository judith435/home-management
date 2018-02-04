var dal = require('..//dal/dal');
var parmObject = require('..//dal/spParm');
var model = require('../models/taskModel');


function getTasks(callback) {
    dal.executeQuery('get_tasks', '',function(err, rows) {
        if (err) {
            callback(err);
        }
        const tasksObjectsArray = [];
        rows[0].forEach(function (row) {
            tasksObjectsArray.push(new model.Task(row));
        });
        callback(null, tasksObjectsArray);
    });
}



function addTask(task, callback) { 

    console.log('>>> taskBL: ' + JSON.stringify(task));  

    const spParms = []; 
    
    spParms.push(new parmObject.spParm(task.description, true));
    spParms.push(new parmObject.spParm(task.familyMember, false));

    console.log('!!! in bl  spParms: ' + JSON.stringify(spParms));
    dal.executeQuery('insert_task', spParms, function(err, rows) {
        if (err) {
            callback(err);
        }
        callback(null, 'task added successfully');
    });
}

module.exports.Tasks = {
    getTasks: getTasks,
    addTask: addTask
}