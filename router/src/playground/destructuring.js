// const person = {
//     name: 'Erfi',
//     age: 26,
//     location: {
//         city: 'Singapore-betch',
//         temp: 32
//     }
// };

// const {name, age} = person;
// const {city, temp: temperature} = person.location;

// console.log(`${name} is ${age} and is living in ${city} and it is ${temperature} right now`);

const book = {
    title: 'Dune',
    author: 'Frank Herbert',
    publisher: {
        name: 'Penguin'
    }
};
const {title, author} = book;
const {name: publisherName = 'Self-published'} = book.publisher;

console.log(publisherName);
