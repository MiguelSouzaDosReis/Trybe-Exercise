"use strict";
exports.__esModule = true;
var testInterfaceEmployee = {
    registration: 'FNC1234567891011',
    salary: 1200.00,
    admissionDate: new Date(),
    generateRegistration: function () {
        var randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
        return "FNC" + randomStr;
    }
};
console.log(testInterfaceEmployee);
