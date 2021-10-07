function hydrate(str) {
    let glassOfWater = str.match(/\d+/g);
    let soma = 0;
    for (let index = 0; index < glassOfWater.length; index++) {
      soma += parseFloat(glassOfWater[index]);
    }
    if (soma === 1) {
      return (`${soma} copo de água`);
    }
    return (`${soma} copos de água`);
  }
  module.exports = hydrate;  