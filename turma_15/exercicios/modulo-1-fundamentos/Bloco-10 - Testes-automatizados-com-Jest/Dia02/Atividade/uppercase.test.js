const uppercase = (str, callback) => {
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 500);
  };


describe('transforma letras minusculas em maisculas', () => {
    it('a palavra "string" vai ficar "STRING"', (done) => {
        uppercase('string', (callback) => {
            try {
                expect(callback).toBe('STRING')
                done()
            }
            catch (error) {
             done(error)
            }
        })
    })
})