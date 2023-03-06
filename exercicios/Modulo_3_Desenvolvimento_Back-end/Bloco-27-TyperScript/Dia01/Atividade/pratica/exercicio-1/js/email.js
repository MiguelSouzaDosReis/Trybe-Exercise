var emailInput = 'email@email.com';
var validateEmailFormat = function (param) {
    var re = /\S+@\S+\.\S+/;
    return re.test(param);
};
console.log(validateEmailFormat(emailInput));
