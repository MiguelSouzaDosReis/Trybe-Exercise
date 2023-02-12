var ageInput = 19;
var isOfLegalAge = function (param) {
    return !!param;
};
ageInput >= 18
    ? console.log(isOfLegalAge('true'))
    : console.log(isOfLegalAge(false));
