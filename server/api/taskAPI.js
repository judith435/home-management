var taskCtrl = require('../controllers/taskController');


function getTasks(req, res) {
    taskCtrl.getTasks(function(err, tasks) {
        if (err) {
            res.end('Sorry Dude! '+ err);
        }
        res.end(JSON.stringify(tasks));
    })
}

function addTask(req, res) {
    console.log('>>> taskAPI: ' + req.query);
    taskCtrl.addTask(req, function(err, result) {
        if (err) {
            res.end('Sorry Dude! '+ err);
        }
        res.end(JSON.stringify(result));
    })
}

function deleteTask(req, res) {
    console.log('>>> taskAPI: ' + req.query); 
    taskCtrl.deleteTask(req, function(err, result) {
        if (err) {
            res.end('Sorry Dude! '+ err);
        }
        res.end(JSON.stringify(result));
    })
}

module.exports.getTasks = getTasks;
module.exports.addTask = addTask;
module.exports.deleteTask = deleteTask;