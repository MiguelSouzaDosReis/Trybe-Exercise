const strings = require('./strings')
jest.mock("./strings");

 //Atividade 4

describe('atividade 4', () => {
  test("mockando função para receber um parâmetro e retornar em caixa baixa" , () => {
    strings.firstFunction.mockImplementation(a => a.toLowerCase());
    expect(strings.firstFunction("UPPERCASE")).toBe("uppercase");
  })
  
  
  test("mockando função que recebe um parâmetro e retorna a última letra", () => {
    strings.secondFunction.mockImplementation(a => a.charAt(5));
    expect(strings.secondFunction("letter")).toBe("r")
  })
  
  test("mockando função que recebe 3 parâmetros e os concatena", () => {
    strings.thirdFunction.mockImplementation((a, b, c) => a.concat(b, c));
    expect(strings.thirdFunction("tr", "y", "be")).toBe("trybe")})
})

// atividade 5

test("mockando função para receber um parâmetro e retornar em caixa baixa", () => {
  strings.firstFunction.mockImplementation(a => a.toLowerCase());

  expect(strings.firstFunction("UPPERCASE")).toBe("uppercase");
  expect(strings.firstFunction).toHaveBeenCalled();
  expect(strings.firstFunction).toHaveBeenCalledWith("UPPERCASE");

  strings.firstFunction.mockRestore();
  strings.firstFunction.mockImplementation(a => a.toUpperCase());

  expect(strings.firstFunction("lowercase")).toBe("LOWERCASE");
});