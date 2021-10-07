//tive dificuldades e olhei o gabarito


let n = 7;
let meio = (n + 1) / 2;
let esquerda = meio;
let direito = meio;
let asterisco = '*';
for (let i = 1; i <= meio; i += 1) {
  let espaco = '';
  for (let j = 1; j <= n; j += 1) {
    if (j == esquerda || j == direito || i == meio) {
      espaco += asterisco;
    } else {
      espaco += ' ';
    }
  }
  esquerda -= 1;
  direito += 1;
  console.log(espaco);
}