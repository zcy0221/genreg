//运行JS，并数据传输生成svg
var fs = require("fs");
let {svg}=require('./main');
console.log("准备写入文件");
fs.writeFile('test.svg', svg, function (err) {
    if (err) {
        return console.error(err);
    }
    console.log("<svg>数据写入成功！");
});
/* module.exports={
    data
}; */