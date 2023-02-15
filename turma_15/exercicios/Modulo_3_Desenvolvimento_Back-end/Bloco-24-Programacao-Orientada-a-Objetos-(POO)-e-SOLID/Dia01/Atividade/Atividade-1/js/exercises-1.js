"use strict";
class Student {
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
}
const personOne = new Student('202001011', 'Maria da Silva');
personOne.examsGrades = [25, 20, 23, 23];
personOne.assignmentsGrades = [45, 45];
console.log(personOne);
const personTwo = new Student('202001012', 'João da Silva');
personTwo.examsGrades = [90, 37, 2, 13];
personTwo.assignmentsGrades = [100, 25];
console.log(personTwo);
