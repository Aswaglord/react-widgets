import { Component } from "react";

export default class HowdyGoodbye extends Component {
  constructor() {
    super();

    this.state = {
      message: 'Howdy'
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const newMessage = this.state.message === "Howdy" ? 'Goodbye': "Howdy"
    this.setState({
      message: newMessage
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.handleClick}>Toggle Me</button>
      </div>
      )
  }
}