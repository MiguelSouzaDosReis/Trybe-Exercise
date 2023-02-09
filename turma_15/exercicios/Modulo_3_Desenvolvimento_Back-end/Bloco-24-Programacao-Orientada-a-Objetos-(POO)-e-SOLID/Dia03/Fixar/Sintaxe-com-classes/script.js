"use strict";
class Character {
}
class MeeleeCharacter extends Character {
    constructor(name, specialMoveName) {
        super();
        this.nome = name;
        this.SpecialMove = specialMoveName;
    }
    talk() {
        console.log(`Hi, I'm ${this.nome}. I attack at close range.`);
    }
    specialMove() {
        console.log(this.SpecialMove);
    }
}
class LongRangeCharacter extends Character {
    constructor(name, specialMoveName) {
        super();
        this.nome = name;
        this.SpecialMove = specialMoveName;
    }
    talk() {
        console.log(`Hi, I'm ${this.nome}. I can attack from a long range.`);
    }
    specialMove() {
        console.log(this.SpecialMove);
    }
}
function smash(character) {
    character.talk();
    character.specialMove();
}
const yoshi = new MeeleeCharacter('yoshi', 'Super dragon');
const samus = new LongRangeCharacter('samus', 'Zero Laser');
smash(yoshi);
smash(samus);
