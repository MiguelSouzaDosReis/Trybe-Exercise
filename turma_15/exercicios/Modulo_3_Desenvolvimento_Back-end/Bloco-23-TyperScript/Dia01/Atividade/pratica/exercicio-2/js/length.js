"use strict";
exports.__esModule = true;
function convert(value, fromUnit, toUnit) {
    var units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
    var fromIndex = units.indexOf(fromUnit);
    var toIndex = units.indexOf(toUnit);
    var exponent = toIndex - fromIndex;
    console.log(value * Math.pow(10, exponent));
}
exports["default"] = convert;
convert(1, 'km', 'm');
