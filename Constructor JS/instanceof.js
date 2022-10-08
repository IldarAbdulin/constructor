function Car(model) {
    this.model = model;
    this.wheels = 4;
}

function User(name, age) {
    this.name = name;
    this.age = age;
}

let date = new Date();
let car = new Car("Jaguar X-Type");
let user = new User("Jhon", 25);

// Функция конструктор - НЕ представляет тип данных
// созданный экземпляр через любую из функций конструктора относится к типу object
console.log(typeof "1"); // object
console.log(typeof car); // object
console.log(typeof user); // object

// instanceof - ключевое слово, которое проверят наличие в цепочке прототипов
// прототипа указанной функции
console.log(date instanceof Date); // true - date создан конструктором Date
console.log(car instanceof Car); // true - car создан конструктором Car
console.log(user instanceof User); // true - user создан конструктором User

console.log(user instanceof Date); // false - user не создан конструктором Date
console.log(user instanceof Car); // false - user не создан конструктором Car