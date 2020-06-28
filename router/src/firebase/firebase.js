import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD8YHfSgTCmOYdwlrxVIxRrsnL7dKtq_O0",
    authDomain: "react-erfi-expensify.firebaseapp.com",
    databaseURL: "https://react-erfi-expensify.firebaseio.com",
    projectId: "react-erfi-expensify",
    storageBucket: "react-erfi-expensify.appspot.com",
    messagingSenderId: "749144918499",
    appId: "1:749144918499:web:076d7173ae5e1fdade38d6",
    measurementId: "G-YL6V5TV6WJ"
};

firebase.initializeApp(config);

const database = firebase.database();

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     });



// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: 124125166161
// });

// database.ref('notes').push({
//     "title":"To Do",
//     "body":"Go for a run"
// });
// const firebaseNotes = {
//     notes: {

//     }
// };

// const notes = [{
//     id: '12',
//     title: 'First Note!',
//     body: 'This is my note'
// }, {
//     id: '123',
//     title: 'Second Note!',
//     body: 'This is my note'
// }];

// database.ref('notes').set(notes);
// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// })

// Setup data sub -> Erfi is a Software Developer at Amazon.

// Change the data and make sure it reprints

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });

// database.ref().set({
//   name: 'Erfi Anugrah',
//   age: 26,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Philadelphia',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data is saved!');
// }).catch((e) => {
//   console.log('This failed.', e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// database.ref()
//   .remove()
//   .then(() => {
//     console.log('Data was removed');
//   }).catch((e) => {
//     console.log('Did not remove data', e);
//   });