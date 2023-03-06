abstract class Character {
  abstract talk(): void;
  abstract specialMove(): void;

  static characterPresentation(character: Character): void {
    character.talk();
    character.specialMove();
  }
}
class MeeleeCharacter extends Character {
  nome: string;
  SpecialMove: string;

  constructor(name: string,specialMoveName: string) {
    super();
    this.nome = name
    this.SpecialMove = specialMoveName
    }

  talk(): void {
    console.log(`Hi, I'm ${this.nome}. I attack at close range.`);
  }
  specialMove(): void {
    console.log(this.SpecialMove);
  }
}

class LongRangeCharacter extends Character {
  nome: string;
  SpecialMove: string;

  constructor(name: string,specialMoveName: string) {
    super();
    this.nome = name
    this.SpecialMove = specialMoveName
    }

  talk(): void {
    console.log(`Hi, I'm ${this.nome}. I can attack from a long range.`);
  }
  specialMove(): void {
    console.log(this.SpecialMove);
  }
}


function smash(character: Character) {
  character.talk();
  character.specialMove();
}

const yoshi = new MeeleeCharacter('yoshi', 'Super dragon')
const samus = new LongRangeCharacter('samus', 'Zero Laser')

Character.characterPresentation(yoshi);
Character.characterPresentation(samus);