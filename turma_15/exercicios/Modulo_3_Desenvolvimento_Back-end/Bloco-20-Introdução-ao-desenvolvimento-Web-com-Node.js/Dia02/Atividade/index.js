function p (n1,n2,n3){
  const promise = new Promise((res, rej) => {
    if(typeof n1 !== 'number' || typeof n2 !== 'number' || typeof n3 !== 'number'){rej(new Error("Informe apenas números"));}
    const results = (n1+n2) * n3
    if(results < 50){rej(new Error("Valor muito baixo"))}
    res(results)
  })
  return promise
}
const randomNumber = Math.floor(Math.random() * 100 + 1)

p(randomNumber, randomNumber, randomNumber)
  .then(result => console.log(`sucesso: ${result}`))
  .catch(err => console.log(`erro: ${err.message}`));
