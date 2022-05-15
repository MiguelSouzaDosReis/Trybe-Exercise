// Exercícios 1

type Passaro = {
  nome: string,
  assas: number,
  cor: string,
  brasil: boolean,
}


function criarPassaro(criação: Passaro) {
  console.log(
`O nome do seu passaro é ${criação.nome} ele tem ${criação.assas} assas e a cor dele é ${criação.cor} e ele é do brasil ? ${criação.brasil} `);
}

criarPassaro({nome: 'Zeca', assas: 2, cor: 'verde', brasil: true});



// Exercícios 2

type Numero = {
  x: number;
  y: number;
};


function Soma(element: Numero) {
 console.log(element.y + element.x);
}

Soma({ x: 100, y: 100 });



// Exercícios 3

type endereço = {
  rua : string,
  apartamento: number,
  brasil: boolean,
}


function criarEndereço(criação: endereço) {
  console.log(
`A sua rua é ${criação.rua} e o seu apartamento é ${criação.apartamento} e fica no brasil ? ${criação.brasil} `);
}

criarEndereço({rua: 'São Francisco', apartamento: 2, brasil: true});