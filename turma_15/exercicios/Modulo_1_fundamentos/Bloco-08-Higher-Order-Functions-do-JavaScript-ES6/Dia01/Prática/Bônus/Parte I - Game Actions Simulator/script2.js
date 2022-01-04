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

const danoQueOWarriorDa = () => {
  const { weaponDmg, strength } = warrior;
  const max = strength * weaponDmg
  let dano = Math.round((Math.random() * (max - strength) + strength));
  console.log(dano) 
}

danoQueOWarriorDa()