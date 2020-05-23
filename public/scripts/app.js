'use strict';

var app = {
    title: 'Visibility Toggle',
    details: 'Here\'s the detail'
};

var visibility = false;

var toggleVisibility = function toggleVisibility() {
    visibility = !visibility;
    renderBuildIt();
};

var renderBuildIt = function renderBuildIt() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        React.createElement(
            'button',
            { onClick: toggleVisibility },
            visibility ? 'Hide Details' : 'Show Details'
        ),
        visibility && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'Here is the detail.'
            )
        )
    );
    ReactDOM.render(template, document.getElementById('app'));
};

renderBuildIt();
