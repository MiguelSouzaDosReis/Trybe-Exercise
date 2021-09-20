const newEmployees = () => {
    const employees = {
      id1: 'Pedro Guerra', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra ncomo parâmetro, substituindo as aspas
      id2: 'Luiza Drumond ', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: 'Carla Paiva', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

const nome1 = newEmployees().id1
const nome2 = newEmployees().id2
const nome3 = newEmployees().id3

const contradado = (nome) => {
  const email = nome.toLowerCase().split(' ').join('_')
  const objeto = {
    nomeCompleto : `${nome}`,
    email: `${email}@trybe.com`
  }
  console.log(objeto)
}
contradado(nome1)

