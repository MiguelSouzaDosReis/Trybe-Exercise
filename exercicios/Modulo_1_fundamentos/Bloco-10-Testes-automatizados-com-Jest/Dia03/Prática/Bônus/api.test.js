const service = require('./api');

//Atividade 1

describe('fetchJokes', () => {
  it('deve retornar uma string com a piada', () => {
    const spy = jest.spyOn(service, 'fetchJoke')
      .mockResolvedValue('Whiteboards ... are remarkable.');
    service.fetchJoke();
    expect(spy).toBeCalledTimes(1);
    expect(service.fetchJoke()).resolves.toBe('Whiteboards ... are remarkable.');
    expect(spy).toBeCalledTimes(2);
  })
})

//Atividade 2

const fetch = () => Promise.resolve({
  json: () => Promise.resolve({
    'id': '7h3oGtrOfxc',
    'joke': 'Whiteboards ... are remarkable.',
    'status': 200
  })
});

describe('fetchJokes', () => {
  it('should return a string with the joke', () => {
    const spy = jest.spyOn(service, 'fetchJoke');
    service.fetchJoke(fetch);
    expect(spy).toBeCalledTimes(3);
    expect(service.fetchJoke(fetch)).resolves.toBe('Whiteboards ... are remarkable.');
  })
})