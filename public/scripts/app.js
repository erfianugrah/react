'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'This is some info'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        )
    )
);

// Create a templateTwo var JSX Expression
// div
//  h1 -> Erfi Anugrah
//  p -> Age: 26
//  p -> Location: Singapore
//Render templateTwo instead of template
var userName = 'John Wick';
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        userName
    ),
    React.createElement(
        'p',
        null,
        'Age: 26'
    ),
    React.createElement(
        'p',
        null,
        'Location: Singapore'
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
