"use strict";
exports.__esModule = true;
function convert(value, fromUnit, toUnit) {
    var units = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];
    var fromIndex = units.indexOf(fromUnit);
    var toIndex = units.indexOf(toUnit);
    var exponent = toIndex - fromIndex;
    console.log(value * Math.pow(10, exponent));
}
exports["default"] = convert;
convert(1, 'km²', 'm²');
