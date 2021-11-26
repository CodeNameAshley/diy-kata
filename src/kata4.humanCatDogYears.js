// const humanCatDogYears = number => {
//   // this variable is the same for both cat and doge
//   const year1and2 = 15 + 9;

//   // variables for  cat and doge  past year 3
//   const catYear3Plus = (number - 2) * 4;
//   const dogYear3Plus = (number - 2) * 5;

//   // variables for calculating the sum of cat and doge years with year 1 + year 2 + year  3 plus
//   const catYears = year1and2 + catYear3Plus;
//   const dogYears = year1and2 + dogYear3Plus;

//   // returns number(parameter), and variables catYears and dogYears in an array
//   return [number, catYears, dogYears];
// };

// REFACTORED VERSION!
const humanCatDogYears = (number) => {
  // variables for calculating the sum of cat and doge years with year 1 + year 2 + year  3 plus
  const catYears = 15 + 9 + (number - 2) * 4;
  const dogYears = 15 + 9 + (number - 2) * 5;

  // returns number(parameter), and variables catYears and dogYears in an array
  return [number, catYears, dogYears];
};

module.exports = humanCatDogYears;
