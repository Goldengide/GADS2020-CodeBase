import '../styles/index.scss';

console.log('webpack starterkit');

let app = (function() {
    let carId = 900;
    let getId = function () {
        return carId;
    };
    console.log("Hi it's IIFE now upgraded to closures");
    console.log("It's Amowogbaje Gideon coding it");
    return{ getId: getId};
})();

let g = {
    carId: '457',
    getId: function(prefix) {
        return prefix + this.carId;
    }
};

let newCar = {carId: '542'};
console.log(g.getId.apply(newCar, ['ID: ']));


console.log(app.getId());
console.log(g.getId());