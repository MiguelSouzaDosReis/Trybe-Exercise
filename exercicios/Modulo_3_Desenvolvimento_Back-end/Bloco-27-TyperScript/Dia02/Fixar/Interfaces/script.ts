interface Automóvel {
  placa: string
  rodas: number,
  eletrico: boolean,
  frase(): string;
}

let carro: Automóvel = {
  placa: 'MOH-0257',
  rodas: 4,
  eletrico: true,
  frase(): string {return`${this.placa} e tem ${this.rodas} e ele é eletrico ? ${this.eletrico}`}
}

interface Felino {
  nome: string
  age: number,
  mia: boolean,
  frase(): string;
}

let felino: Felino = {
  nome: 'Yoda',
  age: 4,
  mia: true,
  frase(): string {return`${this.nome} e tem ${this.age} e ele mia ? ${this.mia}`}
}

interface Aeronave extends Automóvel {
  voa: boolean,
  fraseAvião(): string;
}

let aviao: Aeronave = {
  placa: 'PR-MHC',
  rodas: 0,
  eletrico: false,
  voa: true,
  frase(): string {return `${this.placa} e tem ${this.rodas} e ele é eletrico ? ${this.eletrico}`},
  fraseAvião(): string {return `Como você sabe ${this.frase()} e ele voa ? ${this.voa}`;}
}
console.log(aviao.fraseAvião())