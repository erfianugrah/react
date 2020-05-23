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

const user = {
    name: "Erfi",
    age: 26,
    location: 'Singapore'
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    } 
}

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);
const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);