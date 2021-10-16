// const reachDestination = (distance, speed) => {
//   const hours = distance / speed;
//   const calc = Math.round(hours / 0.5) * 0.5;

//   return `I should be there in ${calc} hours.`;
// };

// REFACTORED VERSION

const reachDestination = (distance, speed) => {
    const calc = Math.round((distance / speed) / 0.5) * 0.5;
  
    return `I should be there in ${calc} hours.`;
  };

module.exports = reachDestination;
