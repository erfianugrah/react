import * as firebase from 'firebase/app';

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

database.ref().set({
    name: 'Erfi Anugrah',
    age: 26,
    isSingle: false,
    location: {
        city: 'Singapore',
        country: 'United States'
    }
}).then(() => {
    console.log('Data is saved');
}).catch((e) => {
    console.log('This failed.', e);
});

// database.ref('age').set(27);
// database.ref('location/city').set('Stockholm');

database.ref('attributes').set({
    height: 165,
    weight: 60
}).then(() => {
    console.log('Second set call works');
}).catch((e) => {
    console.log('Things didn\'t for the second error', e);
});