class Vehincle {
    constructor(id = 123) {
        this.type = 'car',
        this.id =id;
    };
    
    start() {
        console.log(`Starting my ${this.type} with ${this.id}`);
    }
}


class Ship extends Vehincle {}

car = new Vehincle(42314);
car.start();
ship = new Ship(45678);
ship.type = "Ship";
ship.start();