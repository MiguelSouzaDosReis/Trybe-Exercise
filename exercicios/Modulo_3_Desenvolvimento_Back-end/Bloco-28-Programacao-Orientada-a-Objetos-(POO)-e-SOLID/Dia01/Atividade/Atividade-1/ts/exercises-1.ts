class Student {
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
  }
  
  const personOne = new Student('202001011', 'Maria da Silva');

  personOne.examsGrades = [25, 20, 23, 23];
  personOne.assignmentsGrades = [45, 45];
  
  console.log(personOne);
  
  const personTwo = new Student('202001012', 'João da Silva');

  personTwo.examsGrades = [90, 37, 2,13];
  personTwo.assignmentsGrades = [100, 25];

  console.log(personTwo);
  