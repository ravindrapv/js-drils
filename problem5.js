let inventory = require("./inventory");
// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.
function countCarsOlderThanYear(year) {
  let count = 0;
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i] < year) {
      count++;
    }
  }
  return count;
}
module.exports = countCarsOlderThanYear;
