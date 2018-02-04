var taskCtrl = require('../controllers/taskController');


function getTasks(req, res) {
    //console.log(req.body); // get the body data of get
    taskCtrl.getTasks(function(err, tasks) {
        if (err) {
            res.end('Sorry Dude! '+ err);
        }
        res.end(JSON.stringify(tasks));
    })
}



function addTask(req, res) {
    console.log('>>> taskAPI: ' + req.query); // get req.body the body data of get
    taskCtrl.addTask(req, function(err, result) {
        if (err) {
            res.end('Sorry Dude! '+ err);
        }
        res.end(JSON.stringify(result));
    })
}


module.exports.getTasks = getTasks;
module.exports.addTask = addTask;