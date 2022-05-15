// atividade 1

class cachorro {
  _nome: string;
  _idade: number;
  _raca: string;
  _morde: boolean;
  constructor(name: string, age: number, raçaDoCachorro: string, morde: boolean){
    this._nome = name;
    this._idade = age;
    this._raca = raçaDoCachorro
    this._morde = morde;
  }
}

const criandoCachorro = new cachorro('iggy', 7,'Boston Terrier', true)



// atividade 2

class casa {
  _papelDeParede: string;
  _QuantosQuartos: number;
  _janelaComVistaParaOSol: boolean;
  constructor(wallpaper: string, rooms: number, window: boolean){
    this._papelDeParede = wallpaper;
    this._QuantosQuartos = rooms;
    this._janelaComVistaParaOSol = window;
  }
}

const criandoCasa = new casa('Cimento Queimado',6, true)



// atividade 3

class voo {
  _nomeDoPassaro: string;
  quantosPassaros: number;
  _voa: boolean;
  constructor(name: string, many: number, fly: boolean){
    this._nomeDoPassaro = name;
    this.quantosPassaros = many;
    this._voa = fly;
  }
}

const criandoVoo = new voo('Bem-te-vi',6, true)

console.log(criandoVoo)