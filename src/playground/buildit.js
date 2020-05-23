const app = {
    title: 'Visibility Toggle',
    details: 'Here\'s the detail'
};


let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility
    renderBuildIt();
};

const renderBuildIt = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={toggleVisibility}>
                {visibility ? 'Hide Details' : 'Show Details'}
            </button>
            {visibility && (
                <div>
                    <p>Here is the detail.</p>
                </div>
            )}
        </div>

        );
        ReactDOM.render(template, document.getElementById('app'));       
};

renderBuildIt();