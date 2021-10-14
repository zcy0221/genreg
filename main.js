var fs = require('fs');
var path = require('path');
let { input, findSync } = require('./input');
let { SFrame, Frame1, Frame2, Postil, Painting } = require('./render');
let { getPath, output, mkdirsSync } = require('./output');
let svgHeader = `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="150"  xmlns:xlink="http://www.w3.org/1999/xlink"><g transform="translate(0.5,0.5)" text-anchor="middle" font-size="12" font-family="Hack" font-weight="normal">`;
let svgFooter = `</g></svg>`;

//-i输入路径，并判断是文件还是文件夹
var filePath = path.resolve(getPath("-i"));
fs.stat(filePath, function (err, opinion) {
    if (opinion.isDirectory()) {
        findSync(filePath);
        let { files, result } = require('./input');
        for (a = 0; a < result.length && a < files.length; a++) {
            ASFrame();
            //根据数据渲染 
            console.log(files[a]);
            let data = input(result[a]);
            Frame1(data);
            Frame2(data);
            Postil(data);
            Painting(data);
            //获取绘制数据，并传递给svg
            let { svgContent } = require('./render');
            let svg = svgHeader + svgContent + svgFooter;
            //-d可新建存取路径，输出svg图像
            mkdirsSync(getPath("-d"));
            output(`${getPath("-d")}/${files[a]}.svg`, svg);
        }
    } else {
        ASFrame();
        let data = input(getPath("-i"));
        Frame1(data);
        Frame2(data);
        Postil(data);
        Painting(data);
        let { svgContent } = require('./render');
        let svg = svgHeader + svgContent + svgFooter;
        mkdirsSync(getPath("-d"));
        output(`${getPath("-d")}/${getPath("-o")}`, svg);
    }
})

//画外框
function ASFrame() {
    SFrame(0, 20, 801, 20);
    SFrame(0, 20, 0, 55);
    SFrame(0, 55, 801, 55);
    SFrame(801, 20, 801, 55);
    SFrame(0, 80, 801, 80);
    SFrame(0, 80, 0, 115);
    SFrame(0, 115, 801, 115);
    SFrame(801, 80, 801, 115);
}
