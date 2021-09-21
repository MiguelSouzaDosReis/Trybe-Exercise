const CheckNumeros = (numero , NumeroAleatorio) => numero === NumeroAleatorio
const GerarNumero = (numero, ParametroDoCheck) => {
    const NumeroAleatorio = Math.round((Math.random () * 5 )) 
    console.log(NumeroAleatorio)
     return ParametroDoCheck (numero, NumeroAleatorio) ? "Parabéns você ganhou" : "Tente novamente" 
    }
    console.log(GerarNumero(2, CheckNumeros))
