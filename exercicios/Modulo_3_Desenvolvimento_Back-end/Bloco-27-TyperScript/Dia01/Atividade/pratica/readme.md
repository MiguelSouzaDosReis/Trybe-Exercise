                                            Atividade

1. Temos uma API que começou a ter diversos erros e apresentar bugs frequentes. Como solução, o CTO do time, avaliou que utilizar o Typescript em suas funções, diminuiria um pouco desses problemas. Para isso você foi direcionado a modificar as funções abaixo, escritas em Javascript, para que fossem tipadas e executassem sem erros no compilador de Typescript:

- Observação: Não é necessário alterar o valor dos parâmetros passados.

- Dica: utilize o Typescript playground para testar o comportamento de cada função.

```js
const numberInput = 7;

const isItAPrime = (param) => {
  for (let i = 2; i < param; i++)
    if (param % i === 0) {
      return false;
    }
  return param > 1;
};

isItAPrime(numberInput)
  ? console.log(`${numberInput} é primo`)
  : console.log(`${numberInput} não é primo`);

```

```js
// Essa função é responsável por validar se o formato do e-mail está correto.

const emailInput = 'email@email.com';

const validateEmailFormat = (param) => {
  var re = /\S+@\S+\.\S+/;
  return re.test(param);
};

console.log(validateEmailFormat(emailInput))
```
```js
// Essa função recebe uma lista e ordena seu conteúdo de forma crescente.

const numberList = [10, 5, 18, 2, 8, 23];

const sortInput = (param) => {
  return param.sort(function(a, b){return a-b});
};

console.log(sortInput(numberList));
```
```js
// Essa função é responsável por receber um objeto e formar uma frase utilizando as chaves do mesmo.
const peopleInput = {
  name: 'Rui',
  age: 23,
};

const createSimpleSentence = (param) => {
  return `Olá, meu nome é ${param.name} e tenho ${param.age} anos.`;
}

console.log(createSimpleSentence(peopleInput));
```
```js
// Essa é uma função que verifica se a idade passada é maior ou menor de 18 anos.
const ageInput = 15;

const isOfLegalAge = (param) => {
  return !!param
}

ageInput >= 18
  ? console.log(isOfLegalAge('true'))
  : console.log(isOfLegalAge(false));

```

2. Crie um script para converter unidades de medida de comprimento:

- 1. Esse script deverá se chamar length.ts;

- 2. Ele deverá possuir uma função chamada convert que recebe como parâmetro:

                            valor - number
                            unidade base - string
                            unidade para a conversão - string

3. Crie um script para converter unidades de medida de massa:

- 1. Esse script deverá se chamar mass.ts;

- 2. Ele deverá possuir uma função chamada convert que recebe como parâmetro:

                            valor - number
                            unidade base - string
                            unidade para a conversão - string

4. Crie um script para converter unidades de medida de capacidade:

- 1. Esse script deverá se chamar capacity.ts;

- 2. Ele deverá possuir uma função chamada convert que recebe como parâmetro:

                            valor - number
                            unidade base - string
                            unidade para a conversão - string


5. Crie um script para converter unidades de medida de área:

- 1. Esse script deverá se chamar area.ts;

- 2. Ele script deverá possuir uma função chamada convert que recebe como parâmetro:

                            valor - number
                            unidade base - string
                            unidade para a conversão - string


6. Crie um script para converter unidades de medida de volume:

- 1. Esse script deverá se chamar volume.ts;

- 2. Ele deverá possuir uma função chamada convert que recebe como parâmetro:

                            valor - number
                            unidade base - string
                            unidade para a conversão - string

7. Vamos tornar nossos scripts de unidades de medida mais interativos! Vamos adicionar input de quem usa o script. Para isso, utilize o pacote readline-sync, documentação.

            Em cada script, crie uma função chamada exec que:


- 1. Capta as entradas da pessoa usuária via terminal;

- 2. Chama a função de conversão passando as entradas da pessoa usuária como parâmetro;

- 3. Exibe uma mensagem com o resultado. Ex: “1km é igual a 1000m.”;

- 4. Não se esqueça de chamar a função exec(); ao final do script.


8. Crie um arquivo index.ts que pergunta qual conversão a pessoa usuária deseja realizar, e chama o script correspondente:

- 1. O script deve ser acionado por meio do comando npm start no package.json;

- 2. Utilize o readline-sync para realizar o input de dados;

- 3. Quando executado, o script deve exibir uma lista numerada dos scripts disponíveis;

- 4. Você pode utilizar o require para executar o script em questão.