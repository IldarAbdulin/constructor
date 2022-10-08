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

car1.showStats();
car2.showStats();

for (const key in car1) {
    // obj.hasOwnProperty(prop) - метод, который проверяет, принадлежит ли свойство prop объекту obj.
    // Работая с объектом car1 можно получить доступ к пользовательским свойствам и методам:
    // - model          на экземпляре
    // - wheelsNumber   в связанном прототипе
    // - showStats      в связанном прототипе
    // При наличии условия будет отображено свойство model, без условия будут выведены все три свойства.
    if (car1.hasOwnProperty(key)) {
        const value = car1[key];
        console.log(key + " = " + value);
   }

    // Метод hasOwnProperty находится в объекте, который является прототипом нашего прототипа. Установка 
    // этого прототипа в Object происходит автоматически.
    // Методы hasOwnProperty, toString и другие есть у всех объектов, так как прототип Object устанавливается
    // как крайний прототип в любой цепочке прототипов.
}