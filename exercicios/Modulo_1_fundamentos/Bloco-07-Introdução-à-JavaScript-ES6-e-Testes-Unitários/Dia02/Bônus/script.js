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

  const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
 //?console.log(allLessons)

 const NumeroEstudantes = () => {
    let NumeroDeEstudanteslesson1 = allLessons.lesson1.numeroEstudantes
    let NumeroDeEstudanteslesson3 = allLessons.lesson3.numeroEstudantes
    let soma = NumeroDeEstudanteslesson1  + NumeroDeEstudanteslesson3
  
    //?console.log(soma)
  }
  NumeroEstudantes()
  
   const relatorio = (professor) => {
       let Professor1 = allLessons.lesson1.professor
       let Professor2 = allLessons.lesson2.professor
       let NumeroDeEstudanteslesson1 = allLessons.lesson1.numeroEstudantes
       let NumeroDeEstudanteslesson2 = allLessons.lesson2.numeroEstudantes
       let NumeroDeEstudanteslesson3 = allLessons.lesson3.numeroEstudantes
       let MateriaMatematica = allLessons.lesson1.materia
       let MateriaHistoria = allLessons.lesson2.materia
       if(professor === Professor1){
        let soma = NumeroDeEstudanteslesson1  + NumeroDeEstudanteslesson3
        console.log(`Professor: ${Professor1}, aulas: ${MateriaMatematica}, estudantes: ${soma}`)
       } else if (professor === Professor2) {
           console.log(`Professor: ${Professor2}, aulas: ${MateriaHistoria}, estudantes: ${NumeroDeEstudanteslesson2}`)
       }

   }
   relatorio('Carlos')