//生成svg图
function output(S) {
    var fs = require("fs");
    fs.writeFile('test.svg', S, function (err) {
        if (err) {
            return console.error(err);
        }
        console.log("成功生成SVG图！");
    });
}
module.exports = { output };