//生成svg图
function output(m, n) {
    var fs = require("fs");
    fs.writeFile(m, n, function (err) {
        if (err) {
            return console.error(err);
        }
        console.log("成功生成SVG图！");
    });
}

//终端运行格式
function getPath(String) {
    var process = require("process");
    let args = process.argv.slice(2);//去除前两个参数，node xxx.js
    if (args.length === 0) {
        return "格式：node xxx.js -i xxx.json -o xxx.svg";
    }
    if (args.length > 0) {
        for (let i = 0; i < args.length; i++) {
            if (args[i].startsWith(String)) {//检测字符串是否以指定的前缀开始
                return args[i + 1]
            }
        }
    }
}
module.exports = { 
    output, 
    getPath 
};