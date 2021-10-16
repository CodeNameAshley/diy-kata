const humanCatDogYears = number => {
    let catYear3Plus = ((number  - 2) * 4) ;
    let year1and2 = 15 + 9;
    let catYears = year1and2 + catYear3Plus ;

    let dogYear3Plus = ((number - 2) * 5);
    let dogYears = year1and2 + dogYear3Plus;

    return [number, catYears, dogYears]
};

module.exports = humanCatDogYears;
