function input(files) {
    var fs = require("fs");
    var data = JSON.parse(fs.readFileSync(files));
    console.log(data.reg);
    return data;
}
function findSync(startPath) {
    let fs = require('fs');
    let join = require('path').join;
    let result = [];
    function finder(path) {
        let files = fs.readdirSync(path);
        files.forEach((val, index) => {
            let fPath = join(path, val);
            let stats = fs.statSync(fPath);
            if (stats.isDirectory()) finder(fPath);
            if (stats.isFile()) result.push(fPath);
        });
        module.exports = { files, result };
    }
    finder(startPath);
}

module.exports = { input,findSync };