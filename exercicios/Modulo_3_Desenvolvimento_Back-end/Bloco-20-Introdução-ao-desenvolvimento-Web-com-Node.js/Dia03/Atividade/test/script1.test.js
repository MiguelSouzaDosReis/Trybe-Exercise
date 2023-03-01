const { expect } = require('chai');
const PositivoNegativo = require("../js/script1")

describe('atividade 1', () => {
  it('é uma "string"', () => {
    const resposta = PositivoNegativo(10);

    expect(resposta).to.be.a('string');
  });
  it('é "positiva"', () => {
    const resposta = PositivoNegativo(10);

    expect(resposta).to.be.equals('positivo');
  });
  it('é "negativa"', () => {
    const resposta = PositivoNegativo(-10);

    expect(resposta).to.be.equals('negativo');
  });
  it('é neutro', () => {
    const resposta = PositivoNegativo(0);

    expect(resposta).to.be.equals('neutro');
  });
});