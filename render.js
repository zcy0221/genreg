//渲染绘制
let { data } = require('./input');
let svgContent = ``;

svgContent += NewLine(0, 20, 801, 20);
svgContent += NewLine(0, 20, 0, 55);
svgContent += NewLine(0, 55, 801, 55);
svgContent += NewLine(801, 20, 801, 55);

svgContent += NewLine(0, 80, 801, 80);
svgContent += NewLine(0, 80, 0, 115);
svgContent += NewLine(0, 115, 801, 115);
svgContent += NewLine(801, 80, 801, 115);

var color = [
    { "code": "fill-opacity:0.1" },
    { "code": "fill-opacity:0.1" },
    { "code": "fill-opacity:0.1;fill:hsl(0,100%,50%)" },
    { "code": "fill-opacity:0.1;fill:hsl(80,100%,50%)" },
    { "code": "fill-opacity:0.1;fill:hsl(170,100%,50%)" },
    { "code": "fill-opacity:0.1;fill:hsl(45,100%,50%)" },
    { "code": "fill-opacity:0.1;fill:hsl(80,100%,50%)" },
    { "code": "fill-opacity:0.1;fill:hsl(215,100%,50%)" }
];

function NewLine(x1, y1, x2, y2) {
    return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="black" stroke-width="1"/>`
}

function KuangJia1() {
    let x1 = 801;
    let sum = 0;
    for (i = 0; i < data.reg.length; i++) {
        sum += data.reg[i].bits;
        if (data.reg[i].bits == 1) {
            svgContent += `<line x1="${x1 - 50}" y1="80" x2="${x1 - 50}" y2="115" stroke="black" stroke-width="1"/>`;
            x1 -= 50;
        } else {
            while (x1 > 801 - 50 * sum + 50) {
                svgContent += `<line x1="${x1 - 50}" y1="80" x2="${x1 - 50}" y2="85" stroke="black" stroke-width="1"/>`;
                svgContent += `<line x1="${x1 - 50}" y1="115" x2="${x1 - 50}" y2="110" stroke="black" stroke-width="1"/>`;
                x1 -= 50;
            }
            if (sum < 16) {
                svgContent += `<line x1="${801 - 50 * sum}" y1="80" x2="${801 - 50 * sum}" y2="115" stroke="black" stroke-width="1"/>`;
                x1 = 801 - 50 * sum;
            }
            else {
                return 0;
            }
        }
    }
}

function KuangJia2() {
    let x1 = 801;
    let sum = 0;
    for (i = 0; i < data.reg.length; i++) {
        sum += data.reg[i].bits;
        if (sum > 16) {
            m = sum - 16;
            j = i;
            if (data.reg[j].bits == 1) {
                svgContent += `<line x1="${x1 - 50}" y1="20" x2="${x1 - 50}" y2="55" stroke="black" stroke-width="1"/>`;
                x1 -= 50;
            } else {
                while (x1 > 801 - 50 * m + 50) {
                    svgContent += `<line x1="${x1 - 50}" y1="20" x2="${x1 - 50}" y2="25" stroke="black" stroke-width="1"/>`;
                    svgContent += `<line x1="${x1 - 50}" y1="55" x2="${x1 - 50}" y2="50" stroke="black" stroke-width="1"/>`;
                    x1 -= 50;
                }
                if (sum < 32) {
                    svgContent += `<line x1="${801 - 50 * m}" y1="20" x2="${801 - 50 * m}" y2="55" stroke="black" stroke-width="1"/>`;
                    x1 = 801 - 50 * m;
                } else {
                    return 0;
                }
            }
        }
    }
}

function BiaoHao() {
    let sum = 0;
    for (i = 0; i < data.reg.length; i++) {
        sum += data.reg[i].bits;
        if (sum <= 16) {
            m = data.reg[i].bits;
            n = sum;
            svgContent += `<text x="${801 - sum * 50 + m * 25}" y="100" style="dominant-baseline:middle;text-anchor:middle">${data.reg[i].name}</text>`;
            svgContent += `<text x="${801 - sum * 50 + m * 25}" y="123" style="dominant-baseline:middle;text-anchor:middle">${data.reg[i].attr}</text>`;
            if (m == 1) {
                svgContent += `<text x="${801 - n * 50 + 25}" y="78" style="text-anchor:middle">${n - 1}</text>`;
            } else {
                svgContent += `<text x="${801 - n * 50 + 25}" y="78" style="text-anchor:middle">${n - 1}</text>`;
                svgContent += `<text x="${801 - (n - m) * 50 - 25}" y="78" style="text-anchor:middle">${n - m}</text>`;
            }
        } else {
            m = data.reg[i].bits;
            n = sum - 16;
            svgContent += `<text x="${801 - n * 50 + m * 25}" y="40" style="dominant-baseline:middle;text-anchor:middle">${data.reg[i].name}</text>`;
            svgContent += `<text x="${801 - n * 50 + m * 25}" y="63" style="dominant-baseline:middle;text-anchor:middle">${data.reg[i].attr}</text>`;
            if (m == 1) {
                svgContent += `<text x="${801 - n * 50 + 25}" y="18" style="text-anchor:middle">${sum - 1}</text>`;
            } else {
                svgContent += `<text x="${801 - n * 50 + 25}" y="18" style="text-anchor:middle">${sum - 1}</text>`;
                svgContent += `<text x="${801 - (n - m) * 50 - 25}" y="18" style="text-anchor:middle">${sum - m}</text>`;
            }
        }
    }
    console.log("标号完成!");
}

function TuSe() {
    let sum = 0;
    for (i = 0; i < data.reg.length; i++) {
        t = data.reg[i].type;
        n = data.reg[i].bits;
        sum += data.reg[i].bits;
        if (sum <= 16) {
            svgContent += `<rect x="${801 - sum * 50}" y="80" width="${n * 50}" height="35" style="${color[t].code}" />`;

        } else {
            m = sum - 16;
            svgContent += `<rect x="${801 - m * 50}" y="20" width="${n * 50}" height="35" style="${color[t].code}" />`;
        }
    }
    console.log("涂色完成!");
    module.exports = { svgContent };
}

module.exports = {
    KuangJia1,
    KuangJia2,
    BiaoHao,
    TuSe,
};