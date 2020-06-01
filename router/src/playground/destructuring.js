// Object Destructuring
const person = {
    name: 'Erfi',
    age: 26,
    location: {
        city: 'Singapore-betch',
        temp: 32
    }
};

const { name = 'Anonymous', age } = person;
const { city, temp: temperature } = person.location;

console.log(`${ name } is ${ age } and is living in ${ city } and it is ${ temperature } right now`);

const book = {
    title: 'Dune',
    author: 'Frank Herbert',
    publisher: {
        name: 'Penguin'
    }
};
const { title, author } = book;
const { name: publisherName = 'Self-published' } = book.publisher;

console.log(publisherName);

// Array Destructuring
const address = [
    '934 Jurong West Street 91',
    'Singapore',
    'Nanyang',
    '640934'
];

const [ , , state = 'Bishan' ] = address;

console.log(`You are in  ${state}`);

const item = [ 'Coffee (hot)', '$2.00', '$2.50', '$2.75' ];
const [ itemName, ,mediumPrice ] = item;

console.log(`A medium ${ itemName } costs ${ mediumPrice }`);