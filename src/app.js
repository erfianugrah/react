const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};
const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = ' ';
    }
    renderTemplate();
};

const appRoot = document.getElementById('app');

const renderTemplate () => {
    const template = (
        <div>
            <h1>{app.title ? app.title : 'It doesn\'t exist'}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
            <p>{app.options.length}</p>
            <ol>
                <li>Item One</li>
                <li>Item Two</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
        );
        ReactDOM.render(template, appRoot);       
};

renderTemplate();


// Create Render Function that renders the new JSX
// Call it right away
// Call it after options array added to