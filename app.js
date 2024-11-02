const colors = require('colors');
const lodash = require('lodash');

const names = ['john', 'peter', 'deeium', 'terry', 'mia', 'alex'];

const capitalize = lodash.map(names, lodash.capitalize);
console.log(colors.bgGreen(capitalize));
