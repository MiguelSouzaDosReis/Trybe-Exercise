let palavra = (frase) =>{
    let separacao = frase.split(' ');
    let AMaiorPalavra = " ";
    
    for (separacao of separacao){
        if (separacao.length > AMaiorPalavra.length)
        AMaiorPalavra = separacao;   
    }
    console.log(AMaiorPalavra)
}

palavra("Antônio foi no banheiro e não sabemos o que aconteceu")