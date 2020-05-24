// VisibilityToggle - render, constructor, handleToggleVisibility
// visibility -> false
class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisiblity = this.handleToggleVisiblity.bind(this);
        this.state = {
            visibility: false
        };
    }
    handleToggleVisiblity() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisiblity}>
                    {this.state.visibility ? 'Hide Details' : 'Show Details'}
                </button>
                {this.state.visibility && 
                    (
                    <div>
                    <p>Hey. This the detail.</p>
                    </div>
                    )
                }
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
// const app = {
//     title: 'Visibility Toggle',
//     details: 'Here\'s the detail'
// };


// let visibility = false;

// const toggleVisibility = () => {
//     visibility = !visibility
//     renderBuildIt();
// };

// const renderBuildIt = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={toggleVisibility}>
//                 {visibility ? 'Hide Details' : 'Show Details'}
//             </button>
//             {visibility && (
//                 <div>
//                     <p>Here is the detail.</p>
//                 </div>
//             )}
//         </div>

//         );
//         ReactDOM.render(template, document.getElementById('app'));       
// };

// renderBuildIt();