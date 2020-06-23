const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('This iss my resolved data');
        // resolve('This is my other resolved data');
        reject('Something went wrong!')
    }, 1500);
});

console.log('before');

promise.then((data) => {
    console.log('2', data);
}).catch((error) => {
    console.log('error: ', error);
});

console.log('after');