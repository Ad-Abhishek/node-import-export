var varImport = require('./one');
var funcImport = require('./three');
var moduleImport = require('./two');

console.log(varImport.PI);
console.log("2 + 4 = " + funcImport.add(2, 4));
console.log("2 * 4 = " + funcImport.mul(2, 4));

moduleImport.three();
moduleImport.one();