const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];
const toObject = ([name, car, year]) => ({ name, car, year });
const palioTo = toObject(palio)
const shelbyCobraTo = toObject(shelbyCobra)
const chironTo = toObject(chiron)
const everyone = [palioTo, shelbyCobraTo, chironTo]

console.log(everyone)