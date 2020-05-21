console.log('App.js is running!');

// JSX - JavaScript XML
var template = (
<div>
    <h1>Indecision App</h1>
    <p>This is some info</p>
    <ol>
        <li>Item One</li>
        <li>Item Two</li>
    </ol>
</div>
);

// Create a templateTwo var JSX Expression
// div
//  h1 -> Erfi Anugrah
//  p -> Age: 26
//  p -> Location: Singapore
//Render templateTwo instead of template

var templateTwo = (
    <div>
        <h1>
           Erfi Anugrah
        </h1>
        <p>
            Age: 26
        </p>
        <p>
            Location: Singapore
        </p>
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);