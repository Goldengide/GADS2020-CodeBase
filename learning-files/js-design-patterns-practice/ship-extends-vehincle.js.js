import { Vehincle } from "./models/vehincle.js";

class Ship extends Vehincle {}

let ship = new Ship(45678);
ship.type = "Ship";
ship.start();