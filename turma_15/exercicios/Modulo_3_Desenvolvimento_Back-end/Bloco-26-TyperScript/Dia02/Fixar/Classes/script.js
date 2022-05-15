"use strict";
// atividade 1
class cachorro {
    constructor(name, age, raçaDoCachorro, morde) {
        this._nome = name;
        this._idade = age;
        this._raca = raçaDoCachorro;
        this._morde = morde;
    }
}
const criandoCachorro = new cachorro('iggy', 7, 'Boston Terrier', true);
// atividade 2
class casa {
    constructor(wallpaper, rooms, window) {
        this._papelDeParede = wallpaper;
        this._QuantosQuartos = rooms;
        this._janelaComVistaParaOSol = window;
    }
}
const criandoCasa = new casa('Cimento Queimado', 6, true);
// atividade 3
class voo {
    constructor(name, many, fly) {
        this._nomeDoPassaro = name;
        this.quantosPassaros = many;
        this._voa = fly;
    }
}
const criandoVoo = new voo('Bem-te-vi', 6, true);
console.log(criandoVoo);
