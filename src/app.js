// JSX - JavaScript XML
const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One','Two']
};


const template = (
<div>
    <h1>{app.title ? app.title : 'It doesn\'t exist'}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
    <ol>
        <li>Item One</li>
        <li>Item Two</li>
    </ol>
</div>
);

let count = 0;
const addOne = () => {
    console.log('addOne');
};
const minusOne = () => {
    console.log('minusOne');
};
const reset = () => {
    console.log('reset');
}

const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>Reset</button>
    </div>
);

// Challenge
// Make Button "-1"- setup minusOne and register log "minusOne"
// Make reset button "reset" -setup setup reset function log "reset"

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);