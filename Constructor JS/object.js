let car = {
    image: "audi-a6-250.jpg",
    manufacturer: "Audi",
    model: "A6",
    year: "2011",
    VIN: "ABCD1234567890XYZ",

    showStats: function (element) {
        element.insertAdjacentHTML("beforeend", `<img src="images/${this.image}" /><br />`);
        element.insertAdjacentHTML("beforeend", `Производитель: ${this.manufacturer}<br />`);
        element.insertAdjacentHTML("beforeend", `Модель: ${this.model}<br />`);
        element.insertAdjacentHTML("beforeend", `Год выпуска: ${this.year}<br />`);
        element.insertAdjacentHTML("beforeend", `VIN: ${this.VIN}<br />`);
    }
};

let placeholder = document.querySelector("#placeholder");
car.showStats(placeholder);