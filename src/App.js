import React, {Component} from 'react';
import './App.css';

class App extends Component {
    // Renders the component without a parent div element
    // <React.Fragment>
    //     <h1>Welcome to New Yoik</h1>
    // </React.Fragment>

    // How to render an elemnt via React.createElement
    //     return React.createElement(
    //     'div',
    // { className: 'App' },
    // React.createElement('h1', null, 'Hello from New Yoik') )


    render() {
        const name = 'John Doe';
        const loading = true;

        return (
            <div className='App'>
                <h1>Hello there, {name} </h1>
            </div>
        )
    }
}

export default App;
