"use strict";
exports.__esModule = true;
function convert(value, fromUnit, toUnit) {
    var units = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];
    var fromIndex = units.indexOf(fromUnit);
    var toIndex = units.indexOf(toUnit);
    var exponent = toIndex - fromIndex;
    console.log(value * Math.pow(10, exponent));
}
exports["default"] = convert;
convert(1, 'km³', 'm³');
