// person.js
// Named export - isAdult(21) - true/false - if adult
// Named export - canDrink(18) -true/false 
export const isAdult = (age) => age >= 21; 
export const canDrink = (age) => age >= 18;
const isSenior = (age) => age >= 65; 
export default isSenior;