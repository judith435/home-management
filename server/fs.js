var fs = require('fs');
// fs - To work with files

fs.readFile('*******.html', 'utf8', function (err, data) {
    if (err) {
        console.log(err);
    }

    console.log(data) // data is the content of the file
});