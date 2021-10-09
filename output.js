//生成svg图
var fs = require("fs");
let { svg } = require('./main');
fs.writeFile('test.svg', svg, function (err) {
    if (err) {
        return console.error(err);
    }
    console.log("成功生成SVG图！");
});
