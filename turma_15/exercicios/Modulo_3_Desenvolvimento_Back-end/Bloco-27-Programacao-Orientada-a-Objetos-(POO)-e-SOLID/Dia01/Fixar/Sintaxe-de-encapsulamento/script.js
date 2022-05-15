"use strict";
class Tv {
    constructor(brand, size, resolution, connections) {
        this._brand = brand;
        this._size = size;
        this._resolution = resolution;
        this._connections = connections;
    }
    turnOn() {
        console.log(`TV ${this._brand}, ${this._size}", resolution: ${this._resolution} \navailable connections: ${this._connections}`);
    }
    set connectedTo(value) {
        if (this._connections.length) {
            console.log(value);
        }
        else {
            console.log("Sorry, connection unavailable!");
        }
    }
    get connectedTo() {
        return this._connectedTo;
    }
}
const tv1 = new Tv('LG', 32, '4K', ['HDMI', 'Ethernet', 'Wifi']);
tv1.connectedTo = 'connection';
