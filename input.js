//读取JSON文件信息
var fs = require("fs");
var data = JSON.parse(fs.readFileSync("./N100/I2C/1.CR.json"));
console.log(data.reg);
module.exports = {
    data
};