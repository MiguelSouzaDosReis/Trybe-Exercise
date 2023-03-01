const assert = require('assert');
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
  assert.deepStrictEqual(hydrate('1 cerveja'),'1 copo de água')
  assert.deepStrictEqual(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'),'7 copos de água')
  assert.deepStrictEqual(hydrate('2 shots de tequila, 2 cervejas e 1 corote'),'5 copos de água')
  assert.deepStrictEqual(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho'),'3 copos de água')
  assert.deepStrictEqual(hydrate('4 caipirinhas e 2 cervejas'), '6 copos de água')
  