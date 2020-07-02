export class Vehincle {
    constructor(id = 123) {
        this.type = 'car',
        this.id =id;
    };
    
    start() {
        console.log(`Starting my ${this.type} with ${this.id}`);
    }
}