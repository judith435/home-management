var dal = require('../dal/dal');

function getFamilyDDL(callback) {
    dal.executeQuery('get_family_members_for_ddl', '' ,function(err, rows) {
        if (err) {
            callback(err);
        }
        //console.log('category bl:  ' +  JSON.stringify(rows));
        callback(null, rows);
    });
}

module.exports.family = {
    getFamilyDDL: getFamilyDDL

}