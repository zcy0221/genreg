let svgHeader = `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="150"  xmlns:xlink="http://www.w3.org/1999/xlink">
<g transform="translate(0.5,0.5)" text-anchor="middle" font-size="12" font-family="Hack" font-weight="normal">`;
let svgFooter = `</g></svg>`;

let { input } = require('./input');
D="./N100/I2C/1.CR.json";
let data=input(D);

let { KuangJia1, KuangJia2, BiaoHao, TuSe } = require('./render');
KuangJia1(data);
KuangJia2(data);
BiaoHao(data);
TuSe(data);

let { svgContent } = require('./render');
let svg = svgHeader + svgContent + svgFooter;
console.log("渲染完成!");

let { output } = require('./output');
output(svg);



