//tive dificuldades e olhei o gabarito

let n = 5
let meio = (n + 1) / 2
let asterisco = "*"
let espaco = ""
let esquerda = meio;
let direita = meio;

for (let i= 0; i<= meio; i++) {
    for (let j = 0; j <= n; j ++) {
      if (j > esquerda && j < direita) {
        espaco = espaco + asterisco;
      } else {
        espaco = espaco + ' ';
      }
    }
    console.log(espaco);
    espaco = '';
    direita += 1;
    esquerda -= 1;
}




