    const fatorial = (numero) => {
    let results = 1
    for (let index = numero; index > 1; index--) {
        results = results * index
        
    }
    return results
}

      console.log(fatorial(5))