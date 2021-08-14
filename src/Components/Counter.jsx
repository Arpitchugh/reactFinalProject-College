import React, { Component } from 'react'

export default class Counter extends Component {
    constructor() {
        super();
        console.log ("Constructor called")
    }
    state = {
        count: 0,
    };
    increment = () => {
        this.setState({count: this.state.count + 1});
    };
    decrement = () => {
        this.setState({count: this.state.count - 1});
    };
    
    componentWillMount() {
        console.log("Component is about to mount");
    }

    componentWillUpdate() {
        console.log("Component is about to Update....");
    }

    componentDidUpdate() {
        console.log("Component Updated....");
    }

    componentDidMount() {
        console.log("Component has mounted");
    }

    componentWillUnmount() {
        console.log("Database collection closed");
    }

    render() {
        console.log("Component Rendered");
        return (
            <div>
                <h1 className={this.state.count>=0 ? 'green': 'red'}>
                    {this.state.count}
                </h1>
                <button onClick={this.increment} className="btn btn-success red-button">
                    Increment
                </button>{"  "}
                <button onClick={this.decrement} className="btn btn-danger">
                    Decrement
                </button>

            </div>
        );
    }
}
