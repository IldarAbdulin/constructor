function createCar(image, manufacturer, model, year, VIN) {
    return {
        image: image,
        manufacturer: manufacturer,
        model: model,
        year: year,
        VIN: VIN,

        showStats: function (element) {
            element.insertAdjacentHTML("beforeend", `<img src="images/${this.image}" /><br />`);
            element.insertAdjacentHTML("beforeend", `Производитель: <b>${this.manufacturer}</b><br />`);
            element.insertAdjacentHTML("beforeend", `Модель: ${this.model}<br />`);
            element.insertAdjacentHTML("beforeend", `Год выпуска: ${this.year}<br />`);
            element.insertAdjacentHTML("beforeend", `VIN: ${this.VIN}<br />`);
        }
    };
}

let car1 = createCar("audi-a6-250.jpg", "Audi", "A6", 2011, "ABCD1234567890XYZ");
let car2 = createCar("jaguar-x-type-250.jpg", "Jaguar", "X-Type", 2008, "DCAF0987654321XYZ");
let car3 = createCar("porsche-carrera-911-250.jpg", "Porsce", "Carrera 911", 2011, "EFGH0987654321XYZ");

let placeholder1 = document.querySelector("#placeholder1");
let placeholder2 = document.querySelector("#placeholder2");
let placeholder3 = document.querySelector("#placeholder3");

car1.showStats(placeholder1);
car2.showStats(placeholder2);
car3.showStats(placeholder3);