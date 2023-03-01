class School {
    private _enrollment: string;
    private _name: string;
    private _examsGrades: number[];
    private _assignmentsGrades: number[];
  
    constructor(enrollment: string, name: string  ) {
    this._enrollment = enrollment;
    this._name = name;
    this._examsGrades = [];
    this._assignmentsGrades = [];
    }

    get enrollment(): string {
      return this._enrollment;
    }
  
    set enrollment(value: string) {
      this._enrollment = value;
    }
  
    get name(): string {
      return this._name;
    }
  
    set name(value: string) {
      this._name = value;
    }

    get examsGrades(): number[] {
      return this._examsGrades;
    }
  
    set examsGrades(value: number[]) {
      if (value.length > 4) {
        throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
      }
  
      this._examsGrades = value;
    }
  
    get assignmentsGrades(): number[] {
      return this._assignmentsGrades;
    }
  
    set assignmentsGrades(value: number[]) {
      if (value.length > 2) {
        throw new Error(
          'A pessoa estudante só pode possuir 2 notas de trabalhos.',
        );
      }
  
      this._assignmentsGrades = value;
    }
    sumGrades(): number {
        return [...this.examsGrades, ...this.assignmentsGrades]
          .reduce((previousNote, note) => {
            const nextNote = note + previousNote;
    
            return nextNote;
          }, 0);
      }
    
      sumAverageGrade(): number {
        const sumGrades = this.sumGrades();
        const divider = this.examsGrades.length + this.assignmentsGrades.length;
    
        return Math.round(sumGrades / divider);
      }
    
  }

    const personThree = new School('202309021', 'William da Silva');

    personThree.examsGrades = [25, 20, 23, 23];
    personThree.assignmentsGrades = [45, 45];


console.log(personThree);
console.log('Soma de todas as notas: ', personThree.sumGrades());
console.log('Média de todas as notas: ', personThree.sumAverageGrade());