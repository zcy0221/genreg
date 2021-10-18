let { fdata } = require('./input');
let { render } = require('./render');
let { getPath, output } = require('./output');

let filePath = (getPath("-i"));
let data=fdata(filePath);
let {fName}=require('./input');
let svg=render(data);
output(getPath("-o"),svg,fName);
