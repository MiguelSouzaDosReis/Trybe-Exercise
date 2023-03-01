const assert = require('assert');
function techList(tech, name) {
    let ArrayDeTech = [];
    tech.sort();
    if (tech.length === 0) {
      return 'Vazio!';
    }
    for (let index = 0; index < tech.length; index++) {
      let objetos = {};
      objetos.tech = tech[index];
      objetos.name = name;
      ArrayDeTech.push(objetos);
    }
  
    return ArrayDeTech;
  }
  assert.deepStrictEqual(typeof techList,'function')
  assert.deepStrictEqual(techList([], 'Lucas'), 'Vazio!' )
  assert.deepStrictEqual(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'),[
    {
      tech: 'CSS',
      name: 'Lucas'
    },
    {
      tech: 'HTML',
      name: 'Lucas'
    },
    {
      tech: 'JavaScript',
      name: 'Lucas'
    },
    {
      tech: 'Jest',
      name: 'Lucas'
    },
    {
      tech: 'React',
      name: 'Lucas'
    }
  ])