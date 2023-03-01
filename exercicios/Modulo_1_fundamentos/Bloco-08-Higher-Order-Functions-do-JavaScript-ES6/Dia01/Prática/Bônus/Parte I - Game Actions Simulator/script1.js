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

const dragonAttack = (dragon) =>  {
    let damage = Math.round((Math.random() * (dragon.strength - 15) + 15));
    return damage
}

const warriorAttack = (warrior) => {
    let maxDmg = warrior.strength * warrior.weaponDmg
    let damage = Math.round((Math.random() * (warrior.strength - maxDmg) + warrior.strength));
    return damage
}

const mageAttack = (mage) => {
    let maxDmg = mage.intelligence * 2
    let damage = Math.round((Math.random() * (mage.intelligence - maxDmg) + mage.intelligence));
    let mana = mage.mana  - 15
    if ( mana < 15){
        return "Não possui mana suficiente"
    } else {
        mage.mana = mana
        return damage
    }
    };

console.log(mageAttack(mage))