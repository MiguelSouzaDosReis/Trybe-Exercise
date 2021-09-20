const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };


  //*Atividade 1
 const noturno = (objeto, turno , valor) => {
   return objeto[turno] = valor 
    

  }; 
noturno(lesson2, 'turno', 'noite')  
//? console.log(lesson2) 


//*Atividade 2
const lista = (objeto) => {
    let ListaDeChave = Object.keys(objeto)
     //?console.log(ListaDeChave) 
}
lista (lesson1)

//*Atividade 3 (vi no gabarito pois não sabia que length tinha que vir depois mas entendi oq eu fiz)
const TamanhoObject = (objeto) => {
    let TamanhoDoObjeto = Object.keys(objeto).length
    //? console.log(TamanhoDoObjeto) 
}
TamanhoObject(lesson3)

//*Atividade 4
const TamanhoValue =(objeto) =>{
    let TamanhoDoValor = Object.values(objeto).length
    //? console.log(TamanhoDoValor) 
}
TamanhoValue(lesson2)

//*Ativade 5

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
//? console.log(allLessons)

//*Atividade 6

const NumeroEstudantes = () => {
  let NumeroDeEstudanteslesson1 = allLessons.lesson1.numeroEstudantes
  let NumeroDeEstudanteslesson2 = allLessons.lesson2.numeroEstudantes
  let NumeroDeEstudanteslesson3 = allLessons.lesson3.numeroEstudantes
  let soma = NumeroDeEstudanteslesson1 + NumeroDeEstudanteslesson2 + NumeroDeEstudanteslesson3

  //?console.log(soma)
}
NumeroEstudantes()

//*Atividade 7
const posicao = (valor, numero) =>{
  let PosicaoValor = Object.values(valor)
  //*console.log(PosicaoValor[numero])
}
posicao(lesson1,0)

//*Atividade 8
const verifique = (objeto, nomeDoChave,nomeDoValorDaChave ) =>{
 if (objeto[nomeDoChave] === nomeDoValorDaChave) {
    return true
 } else {
   return false
 }

}
//? console.log(verifique(lesson3, 'turno', 'noite'));
//? returno true :D

//?console.log(verifique(lesson3, 'materia', 'Maria Clara'));
//? 