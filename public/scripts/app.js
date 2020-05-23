'use strict';

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};
var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = ' ';
    };
    renderTemplate();
};

var appRoot = document.getElementById('app');

var renderTemplate = function renderTemplate() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title ? app.title : 'It doesn\'t exist'
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your options' : 'No Options'
        ),
        React.createElement(
            'p',
            null,
            app.options.length
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
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

renderTemplate();

// Create Render Function that renders the new JSX
// Call it right away
// Call it after options array added to
