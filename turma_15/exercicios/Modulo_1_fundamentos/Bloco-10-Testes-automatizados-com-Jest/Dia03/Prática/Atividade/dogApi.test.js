const service = require('./dogApi');

describe('dogApi', () => {
  const spy = jest.spyOn(service, 'getDogPicture');
  afterEach(spy.mockReset);

  it('deve retornar "request success" quando tiver sucesso', () => {
    spy.mockResolvedValue('request success');
    expect(service.getDogPicture()).resolves.toBe('request success')
    expect(spy).toBeCalledTimes(1);
  })

  it('deve retornar "request failed" quando tiver falhar', () => {
    spy.mockRejectedValue('request failed');
    expect(service.getDogPicture()).rejects.toBe('request failed')
    expect(spy).toBeCalledTimes(1);
  })})