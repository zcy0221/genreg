//读取JSON文件信息
function input(D) {
    var fs = require("fs");
    var data = JSON.parse(fs.readFileSync(D));
    console.log(data.reg);
    return data;
}
module.exports = { input };