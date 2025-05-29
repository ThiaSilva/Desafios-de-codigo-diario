var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = 3.14159;
let r = parseFloat(lines[0]);

let A = n * r * r;

console.log("A=" + A.toFixed(4));