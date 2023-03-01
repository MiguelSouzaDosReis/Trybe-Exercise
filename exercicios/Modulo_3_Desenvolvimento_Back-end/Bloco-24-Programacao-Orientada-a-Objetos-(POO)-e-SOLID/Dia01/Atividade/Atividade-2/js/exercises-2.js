"use strict";
class School {
    constructor(enrollment, name) {
        this._enrollment = enrollment;
        this._name = name;
        this._examsGrades = [];
        this._assignmentsGrades = [];
    }
    get enrollment() {
        return this._enrollment;
    }
    set enrollment(value) {
        this._enrollment = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get examsGrades() {
        return this._examsGrades;
    }
    set examsGrades(value) {
        if (value.length > 4) {
            throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
        }
        this._examsGrades = value;
    }
    get assignmentsGrades() {
        return this._assignmentsGrades;
    }
    set assignmentsGrades(value) {
        if (value.length > 2) {
            throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos.');
        }
        this._assignmentsGrades = value;
    }
    sumGrades() {
        return [...this.examsGrades, ...this.assignmentsGrades]
            .reduce((previousNote, note) => {
            const nextNote = note + previousNote;
            return nextNote;
        }, 0);
    }
    sumAverageGrade() {
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
