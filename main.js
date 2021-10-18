var path = require('path');
let { fdata } = require('./input');
let { render } = require('./render');
let { getPath, output } = require('./output');

var filePath = path.resolve(getPath("-i"));
let data=fdata(filePath);
let {fName}=require('./input');
let svg=render(data);
output(getPath("-o"),svg,fName);
