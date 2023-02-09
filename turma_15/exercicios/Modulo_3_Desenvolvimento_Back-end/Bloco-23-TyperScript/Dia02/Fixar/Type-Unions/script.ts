// Exercícios 1

  function estadosFísicos(matéria:string|boolean){
    if(matéria === true){
      console.log('a matéria existe e pode ter o estado líquido, sólido ou gasoso.')
    }
    if(matéria === false){
      console.log('a matéria não existe')
    }
    if(matéria === 'líquido'){
      console.log(`a matéria é ${matéria}`)
    }
    if(matéria === 'sólido'){
      console.log(`a matéria é ${matéria}`)
    }
    if(matéria === 'gasoso'){
      console.log(`a matéria é ${matéria}`)
    }
  }
estadosFísicos('gasoso') 

// Exercícios 2

function identificadorDeDocumento(value:string|number){
   console.log(value)
}
identificadorDeDocumento(123) 

// Exercícios 3

function sistemasOperacionais(SO:string|boolean){
  if(SO === true){
    console.log('a SO existe e pode ser linux, mac os ou windows')
  }
  if(SO === false){
    console.log('a SO não existe')
  }
  if(SO === 'linux'){
    console.log(`a SO é ${SO}`)
  }
  if(SO === 'mac'){
    console.log(`a SO é ${SO}`)
  }
  if(SO === 'windows'){
    console.log(`a SO é ${SO}`)
  }
}
sistemasOperacionais(true)

// Exercícios 4

function abcedario(vogais:string|boolean){
  if(vogais === true){
    console.log('a vogais existe e pode ser a,e,i,o,u')
  }
  if(vogais === false){
    console.log('a vogais não existe')
  }
  if(vogais === 'a'){
    console.log(`a vogais é ${vogais}`)
  }
  if(vogais === 'e'){
    console.log(`a vogais é ${vogais}`)
  }
  if(vogais === 'i'){
    console.log(`a vogais é ${vogais}`)
  }
  if(vogais === 'o'){
    console.log(`a vogais é ${vogais}`)
  }
  if(vogais === 'u'){
    console.log(`a vogais é ${vogais}`)
  }
}
abcedario('u')