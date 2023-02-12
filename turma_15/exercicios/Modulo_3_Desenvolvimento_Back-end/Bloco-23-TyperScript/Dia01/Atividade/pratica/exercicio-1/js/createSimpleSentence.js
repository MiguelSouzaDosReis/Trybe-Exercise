var peopleInput = {
    name: 'Miguel',
    age: 19
};
var createSimpleSentence = function (param) {
    return "Ol\u00E1, meu nome \u00E9 " + param.name + " e tenho " + param.age + " anos.";
};
console.log(createSimpleSentence(peopleInput));
