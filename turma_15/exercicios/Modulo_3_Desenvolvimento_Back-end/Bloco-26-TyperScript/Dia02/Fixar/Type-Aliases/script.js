"use strict";
// Exercícios 1
function criarPassaro(criação) {
    console.log(`O nome do seu passaro é ${criação.nome} ele tem ${criação.assas} assas e a cor dele é ${criação.cor} e ele é do brasil ? ${criação.brasil} `);
}
criarPassaro({ nome: 'Zeca', assas: 2, cor: 'verde', brasil: true });
function Soma(element) {
    console.log(element.y + element.x);
}
Soma({ x: 100, y: 100 });
function criarEndereço(criação) {
    console.log(`A sua rua é ${criação.rua} e o seu apartamento é ${criação.apartamento} e fica no brasil ? ${criação.brasil} `);
}
criarEndereço({ rua: 'São Francisco', apartamento: 2, brasil: true });
