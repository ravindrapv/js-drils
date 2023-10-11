const inventory = require("./inventory");
// ==== Problem #1 ====
// The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of:
("Car 33 is a *car year goes here* *car make goes here* *car model goes here*");
function findCarById(id) {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].id === id) {
      return inventory[i];
    }
  }
  return null;
}

module.exports = findCarById;
