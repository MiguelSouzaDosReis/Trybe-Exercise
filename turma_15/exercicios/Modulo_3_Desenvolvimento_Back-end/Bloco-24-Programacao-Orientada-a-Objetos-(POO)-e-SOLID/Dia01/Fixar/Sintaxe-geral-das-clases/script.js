"use strict";
class Tv {
    constructor(brand, size, resolution, connections) {
        this._brand = brand;
        this._size = size;
        this._resolution = resolution;
        this._connections = connections;
    }
    turnOn() {
        console.log(`TV ${this._brand}, ${this._size}", resolution: ${this._resolution} 
available connections: ${this._connections}`);
    }
}
const tv1 = new Tv('LG', 32, '4K', ['HDMI', 'Ethernet', 'Wifi']);
console.log(tv1.turnOn());
