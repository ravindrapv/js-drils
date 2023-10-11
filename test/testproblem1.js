const findCarById = require("../problem1");
const inventory = require("../inventory");

const car33 = findCarById(33);
if (car33) {
  console.log(
    `Car 33 is a ${car33.car_year} ${car33.car_make} ${car33.car_model}`
  );
} else {
  console.log("Car with id 33 not found.");
}
