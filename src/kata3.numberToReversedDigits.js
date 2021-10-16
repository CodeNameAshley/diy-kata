const numberToReversedDigits = number => {
    // Turns number parameter into a String, then splits it at "", reverses the sequence, with map it turns number(currently a string) into an array of Numbers
    return String(number).split("").reverse().map(Number);
  //return Array.from(String(number), Number); - DOES NOT REVERSE ARRAY
};

module.exports = numberToReversedDigits;
