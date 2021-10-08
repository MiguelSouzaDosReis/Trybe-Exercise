const service = require('./randomNumber');

//Atividae 2

test("testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada", () => {
  service.randomNumber = jest.fn().mockReturnValue(10);

  expect(service.randomNumber()).toBe(10);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
});

//Atividade3

test("mockando função para receber 3 parâmetros e retornar sua multiplicação", () => {
  service.randomNumber.mockImplementation((a, b, c) => a * b * c);

  expect(service.randomNumber(2, 3, 4)).toBe(24);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledWith(2, 3, 4);
})