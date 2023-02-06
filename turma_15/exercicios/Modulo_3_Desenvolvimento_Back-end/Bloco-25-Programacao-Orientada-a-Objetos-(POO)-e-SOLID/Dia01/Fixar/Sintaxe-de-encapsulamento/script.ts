class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;

  constructor(brand: string, size: number, resolution: string, connections: string[]) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
  }
  turnOn():void {
    console.log(`TV ${this._brand}, ${this._size}", resolution: ${this._resolution} \navailable connections: ${this._connections}`);
  }
   set connectedTo(value: string) {
   if(this._connections.length){
     console.log(value)
   } else {
     console.log("Sorry, connection unavailable!")
   }
  }
  get connectedTo(): any {
    return this._connectedTo;
  }
}

const tv1 = new Tv('LG', 32, '4K', ['HDMI', 'Ethernet', 'Wifi']);

tv1.connectedTo = 'connection'

