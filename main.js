let { input } = require('./input');
let { Frame1,Frame2,Postil,Painting } = require('./render');
let { getPath, output } = require('./output');
let svgHeader = `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="150"  xmlns:xlink="http://www.w3.org/1999/xlink"><g transform="translate(0.5,0.5)" text-anchor="middle" font-size="12" font-family="Hack" font-weight="normal">`;
let svgFooter = `</g></svg>`;

//获取JSON数据并绘制
let data = input(getPath("-i"));
Frame1(data);
Frame2(data);
Postil(data);
Painting(data);
console.log("渲染完成!");

//获取绘制数据，并传递给svg
let { svgContent } = require('./render');
let svg = svgHeader + svgContent + svgFooter;

//输出svg图像
output(getPath("-o"), svg);



