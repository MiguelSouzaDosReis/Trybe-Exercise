const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

function danoQueOWarriorDa() {
  const { intelligence, mana } = mage;
  const max = intelligence * 2
  let dano = Math.round((Math.random() * (max - intelligence) + intelligence));
  const objeto = {
    dano: dano,
    mana: mana 
  }
  console.log(objeto) 
}

danoQueOWarriorDa()