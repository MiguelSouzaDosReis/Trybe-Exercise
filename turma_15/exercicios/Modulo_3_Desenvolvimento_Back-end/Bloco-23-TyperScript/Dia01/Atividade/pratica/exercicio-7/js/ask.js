var readlineSync = require('readline-sync');
var units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
function convert(value, fromUnit, toUnit) {
    var fromIndex = units.indexOf(fromUnit);
    var toIndex = units.indexOf(toUnit);
    var exponent = toIndex - fromIndex;
    return value * Math.pow(10, exponent);
}
function exec() {
    var value = readlineSync.questionFloat('Digite o valor a ser convertido: \n');
    var fromUnitChoiceIndex = readlineSync.keyInSelect(units, 'Escolha um número para a unidade base:');
    var toUnitChoiceIndex = readlineSync.keyInSelect(units, 'Escolha um número para a conversão:');
    var toUnitChoice = units[toUnitChoiceIndex];
    var fromUnitChoice = units[fromUnitChoiceIndex];
    if (!fromUnitChoice || !toUnitChoice) {
        console.log("Fun\u00E7\u00E3o cancelada");
        return 0;
    }
    var result = convert(value, fromUnitChoice, toUnitChoice);
    var message = "" + value + fromUnitChoice + " \u00E9 igual a " + result + toUnitChoice;
    console.log(message);
}
exec();
