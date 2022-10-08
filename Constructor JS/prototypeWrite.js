function Car(model) {
    this.model = model;
}

Car.prototype.wheelsNumber = 4;

Car.prototype.showStats = function () {
    console.log(this.model);
    console.log(this.wheelsNumber);
}

let car1 = new Car("Jaguar X-Type");
let car2 = new Car("Audi A6");
let car3 = new Car("КамАЗ-55111");
// Car.prototype.wheelsNumber = 6;
car3.wheelsNumber = 5; // операции записи меняют только экземпляр, не затрагивая прототипа.

car1.showStats();
car2.showStats();
car3.showStats();