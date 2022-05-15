"use strict";
class Superclass {
    constructor() {
        this.isSuper = true;
    }
    sayHello() {
        console.log('Olá mundo!');
    }
}
class Subclass extends Superclass {
    sayHello2() {
        this.sayHello();
    }
}
const myFunc = (object) => {
    object.sayHello2();
};
const sup = new Superclass();
const sub = new Subclass();
myFunc(sub);
