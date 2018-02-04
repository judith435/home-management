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



// function addProduct(task, callback) { 

//     console.log('>>> productBL: ' + JSON.stringify(task));  

//     const spParms = []; 
    
//     spParms.push(new parmObject.spParm(task.productName, true));
//     spParms.push(new parmObject.spParm(task.supplierID, false));
//     spParms.push(new parmObject.spParm(task.categoryID, false));
//     spParms.push(new parmObject.spParm(task.quantityPerUnit, true));
//     spParms.push(new parmObject.spParm(task.unitPrice, false));
//     spParms.push(new parmObject.spParm(task.discontinued, false));

//     console.log('!!! in bl  spParms: ' + JSON.stringify(spParms));
//     dal.executeQuery('insert_product', spParms, function(err, rows) {
//         if (err) {
//             callback(err);
//         }
//         callback(null, 'task added successfully');
//     });
// }

module.exports.Tasks = {
    getTasks: getTasks//,
    // addTask: addTask
}