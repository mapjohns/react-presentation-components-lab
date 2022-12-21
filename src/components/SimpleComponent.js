// Code SimpleComponent Here
import React, { Component } from "react";

export default class SimpleComponent extends Component {
    constructor() {
        super()
        this.state={
            mood:"happy"
        }
    }

    toggleMood = () => {
        let newState
        this.state.mood === "happy" ? newState = "sad" : newState = "happy"
        this.setState({
            mood: newState
        })
    }

    render() {
        return(
            <div onClick={this.toggleMood}>{this.state.mood}</div>
        )
    }
}