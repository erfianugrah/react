// arguments object - no longer bound with arrow functions
const add = (a, b) => {
//  console.log(arguments);
    return a + b;
};

console.log(add(55,1));

// this keyword - no longer bound

const user = {
    name: 'Erfi',
    cities: [
        'Singapore',
        'New York',
        'Stockholm'
    ],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user.printPlacesLived());

// Challenge Area
const multiplier = {
    // numbers - array of numbers
    // multiplyBy - single number
    // multiply -return a new array where the number where the number have been multiplied
    numbers: [1,2,3],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number);
    }
};

console.log(multiplier.multiply());