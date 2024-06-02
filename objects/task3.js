const car1 = {
    brand: 'Audi',
    model: 'Q5',
    year: 2024
};

const car2 = {
    brand: 'BMW',
    model: 'X5',
    year: 2021
};

const car3 = {
    ...car1,
    car2_brand: car2.brand,
    car2_model: car2.model,
    car2_owner: car2.year,
};
console.log(car3)