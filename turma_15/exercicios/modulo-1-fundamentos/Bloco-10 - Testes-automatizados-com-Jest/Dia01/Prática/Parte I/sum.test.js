const sum = require('./sum')

describe('soma os numeros ', () => {
  it('soma se 4 e 5 da 9', () => {
    expect(sum(4,5)).toBe(9)
  })
  it('soma de 0 e o da 0', () => {
    expect(sum(0,0)).toBe(0)
  })
  it('Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)', () => {
    expect(() => { sum(4,'5') }).toThrow('parameters must be numbers');
  }  )
  it('testar a mensagem de erro', () => {
    expect(() => {sum (4, '5')}).toThrowError(new Error('parameters must be numbers'))
  })
})