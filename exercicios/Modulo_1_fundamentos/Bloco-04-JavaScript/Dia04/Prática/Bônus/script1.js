// para resolver esse problema utilizei a função desse site
// https://dev.to/urfan/leetcode-roman-to-integer-with-javascript-1g3n
function converterLetraRomanaParaNumero (letra) {

	const Romano = { 
			I: 1,
			V: 5,
			X: 10,
			L: 50,
			C: 100,
			D: 500,
			M: 1000
	}

	let result = 0;

	for (i=0; i < letra.length; i++){
			const atual = Romano[letra[i]]; // = 1
			const proximo = Romano[letra[i+1]]; // = 5

			if (atual < proximo){ // se 1 < 5 acontece isso aqui
					result += proximo - atual // IV -> 5 - 1 = 4
					i++ // já foi 2 numeros por conta disso adicione o i++ para pegar o 3 numero se hover se não acaba a funçãp
			} else { // caso o atual for maior que proximo então só pegar atual e adicionar no results e gera a funução mais uma vez por causa do for 
					result += atual
			}
	}

	console.log(result)
};

converterLetraRomanaParaNumero('IV')