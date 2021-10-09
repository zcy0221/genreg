//读取JSON文件信息传输给reg
var fs = require("fs");
var data = JSON.parse(fs.readFileSync("5.ISR.json"));
console.log(data.reg);
module.exports={
    data
};