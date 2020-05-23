'use strict';

// arguments object - no longer bound with arrow functions
var add = function add(a, b) {
    //  console.log(arguments);
    return a + b;
};

console.log(add(55, 1));

// this keyword - no longer bound

var user = {
    name: 'Erfi',
    cities: ['Singapore', 'New York', 'Stockholm'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
    }
};
console.log(user.printPlacesLived());

// Challenge Area
var multiplier = {
    // numbers - array of numbers
    // multiplyBy - single number
    // multiply -return a new array where the number where the number have been multiplied
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return _this2.multiplyBy * number;
        });
    }
};

console.log(multiplier.multiply());
