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

module.exports = techList