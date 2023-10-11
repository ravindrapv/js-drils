// // ==== Problem #1 ====
// // The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of:
// ("Car 33 is a *car year goes here* *car make goes here* *car model goes here*");

// // ==== Problem #2 ====
// // The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model of the last car in the inventory is?  Log the make and model into the console in the format of:
// ("Last car is a *car make goes here* *car model goes here*");

// // ==== Problem #3 ====
// // The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.

// // ==== Problem #4 ====
// // The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.

// // ==== Problem #5 ====
// // The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.

// // ==== Problem #6 ====
// // A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.

// // ==== Problem #1 ====
// function findCarById(id) {
//   const car = inventory.find((item) => item.id === id);
//   return car;
// }

// const car33 = findCarById(33);
// if (car33) {
//   console.log(
//     `Car 33 is a ${car33.car_year} ${car33.car_make} ${car33.car_model}`
//   );
// } else {
//   console.log("Car with id 33 not found.");
// }

// // ==== Problem #2 ====
// function getLastCar() {
//   const lastCar = inventory[inventory.length - 1];
//   return lastCar;
// }

// const lastCar = getLastCar();
// console.log(`Last car is a ${lastCar.car_make} ${lastCar.car_model}`);

// // ==== Problem #3 ====
// function sortCarModelsAlphabetically() {
//   const sortedModels = [...inventory].sort((a, b) =>
//     a.car_model.localeCompare(b.car_model)
//   );
//   return sortedModels.map((car) => car.car_model);
// }

// const sortedCarModels = sortCarModelsAlphabetically();
// console.log(sortedCarModels);

// // ==== Problem #4 ====
// function getCarYears() {
//   const carYears = inventory.map((car) => car.car_year);
//   return carYears;
// }

// const carYears = getCarYears();
// console.log(carYears);

// // ==== Problem #5 ====
// function countCarsOlderThanYear(year) {
//   const olderCars = carYears.filter((carYear) => carYear < year);
//   return olderCars.length;
// }

// const olderThan2000Count = countCarsOlderThanYear(2000);
// console.log(`Number of cars older than 2000: ${olderThan2000Count}`);

// // ==== Problem #6 ====
// function getBMWAndAudiCars() {
//   const bmwAndAudiCars = inventory.filter(
//     (car) => car.car_make === "BMW" || car.car_make === "Audi"
//   );
//   return bmwAndAudiCars;
// }

// const bmwAndAudiCars = getBMWAndAudiCars();
// console.log(JSON.stringify(bmwAndAudiCars, null, 2));
