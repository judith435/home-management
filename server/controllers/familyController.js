var bl = require('../bl/familyBL');

function getFamilyDDL(callback) {

    bl.family.getFamilyDDL(function(err, familyArray) {
        if (err) {
            callback(err);
        }
        callback(null, familyArray);
    })
}

module.exports.getFamilyDDL = getFamilyDDL;