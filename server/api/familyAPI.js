var familyCtrl = require('../controllers/familyController');

function getFamilyDDL(req, res) {
    //console.log(req.body); // get the body data of get
    familyCtrl.getFamilyDDL(function(err, familyMembers) {
        if (err) {
            res.end('Sorry Dude! '+ err);
        }
        res.end(JSON.stringify(familyMembers));
    })
}

module.exports.getFamilyDDL = getFamilyDDL;