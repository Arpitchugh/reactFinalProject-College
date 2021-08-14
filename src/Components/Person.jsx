import React, { Component } from 'react'

export default class Person extends Component {
    data = { id:2, name: "Abhi" , location: "Chandigarh"};
    render() {
        return (
            <div>
                <h1>I am a Person compoment</h1>
                <h2>Name = {this.data.name}</h2>
                <h2>Location = {this.data.location}</h2>
            </div>
        );
    }
}
