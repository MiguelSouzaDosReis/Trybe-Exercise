const {encode, decode} = require('./encode-e-decode')

describe('Para as funções encode e decode crie os seguintes testes em Jest:', () => {
   it('Teste se encode e decode são funções;' , () => {
      expect(typeof encode).toBe('function')
   })
   it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;', () => {
     expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5')
   })
   it('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente', () => {
     expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u')
   })
   it('Teste se as demais letras/números não são convertidos para cada caso;', () => {
     expect(encode('z')).toBe('z')
     expect(decode(7)).toBe("")
   })
   it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
     expect(decode('string').length).toBe('string'.length)
   })
  });
  