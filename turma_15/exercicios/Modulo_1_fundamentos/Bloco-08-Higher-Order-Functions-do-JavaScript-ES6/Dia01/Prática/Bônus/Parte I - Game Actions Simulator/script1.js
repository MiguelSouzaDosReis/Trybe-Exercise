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

const danoDodrgão = (forca) => {
  let vidaDodrgon = dragon.healthPoints
  let dano = Math.round((Math.random() * (forca - 15) + 15));
  let danoTotal = vidaDodrgon - dano
  console.log(danoTotal) 
}

danoDodrgão(warrior.strength)