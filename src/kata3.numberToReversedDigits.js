const numberToReversedDigits = number => {
    return String(number).split("").reverse().map(Number);
  //return Array.from(String(number), Number); - DOES NOT REVERSE ARRAY
};

module.exports = numberToReversedDigits;
