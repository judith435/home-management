var bl = require('../bl/taskBL');
var model = require('../models/taskModel');

// CRUD
function getTasks(callback) {

    bl.Tasks.getTasks(function(err, taskArray) {
        if (err) {
            callback(err);
        }
        callback(null, taskArray);
    })
}



// function addProduct(req, callback) {
//     console.log('>>> productContoller: ' + req.query); // get req.body the body data of get
//     const product = new model.Product(JSON.parse(req.query.product));
    
//     //perform server side validations on product


//     bl.products.addProduct(product, function(err, result) {
//         if (err) {
//             callback(err);
//         }
//         callback(null, result);
//     })
// }


module.exports.getTasks = getTasks;
// module.exports.addTask = addTask;