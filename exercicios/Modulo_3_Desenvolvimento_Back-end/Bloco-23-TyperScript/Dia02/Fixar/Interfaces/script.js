"use strict";
let carro = {
    placa: 'MOH-0257',
    rodas: 4,
    eletrico: true,
    frase() { return `${this.placa} e tem ${this.rodas} e ele é eletrico ? ${this.eletrico}`; }
};
let felino = {
    nome: 'Yoda',
    age: 4,
    mia: true,
    frase() { return `${this.nome} e tem ${this.age} e ele mia ? ${this.mia}`; }
};
let aviao = {
    placa: 'PR-MHC',
    rodas: 0,
    eletrico: false,
    voa: true,
    frase() { return `${this.placa} e tem ${this.rodas} e ele é eletrico ? ${this.eletrico}`; },
    fraseAvião() { return `Como você sabe ${this.frase()} e ele voa ? ${this.voa}`; }
};
console.log(aviao.fraseAvião());
