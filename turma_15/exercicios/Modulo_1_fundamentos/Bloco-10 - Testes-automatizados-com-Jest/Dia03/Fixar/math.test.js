const math = require('./math');
jest.mock("./math");


describe('' , () => {
    it('somar' , () => {

        math.somar.mockImplementation((a, b) => a + b);
        math.somar(1, 2);
        
        expect(math.somar).toHaveBeenCalled();
        expect(math.somar).toHaveBeenCalledTimes(1);
        expect(math.somar).toHaveBeenCalledWith(1, 2);
        expect(math.somar(1, 2)).toBe(3);
    })
    it('subtrair' , () => {

        math.subtrair.mockImplementation((a, b) => a - b);
        math.subtrair(2, 2);
        
        expect(math.subtrair).toHaveBeenCalled();
        expect(math.subtrair).toHaveBeenCalledTimes(1);
        expect(math.subtrair).toHaveBeenCalledWith(2, 2);
        expect(math.subtrair(2, 2)).toBe(0)
    })
    it('multiplicar' , () => {

        math.multiplicar.mockImplementation((a, b) => a * b);
        math.multiplicar(5, 2);
        
        expect(math.multiplicar).toHaveBeenCalled();
        expect(math.multiplicar).toHaveBeenCalledTimes(1);
        expect(math.multiplicar).toHaveBeenCalledWith(5, 2);
        expect(math.multiplicar(5, 2)).toBe(10)
    })
    it('dividir' , () => {

        math.dividir.mockImplementation((a, b) => a / b);
        math.dividir(15, 5);
        
        expect(math.dividir).toHaveBeenCalled();
        expect(math.dividir).toHaveBeenCalledTimes(1);
        expect(math.dividir).toHaveBeenCalledWith(15, 5);
        expect(math.dividir(15, 5)).toBe(3)
    })
    it('subtrair com spyOn', () => {
        const mockSubtrair = jest.spyOn(math, "subtrair");
        expect(mockSubtrair).toHaveBeenCalled();
        expect(mockSubtrair(10, 2)).toBe(8);
      });
      
})

