import { Component } from "react";

class Time extends Component {
  constructor() {
    super();

    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }
  componentDidMount() {
    this.interval = setInterval(
      () =>
        this.setState({
          time: new Date().toLocaleTimeString(),
        }),
      1000
    );
  }

  render() {
    return <h1>{this.state.time}</h1>;
  }
}

export default class Mount extends Component {
  constructor() {
    super();

    this.state = {
      buttonText: "Unmount",
    };
  }

  renderButtonText() {
    const text = this.state.buttonText === "Unmount" ? "Mount" : "Unmount"
    this.setState({
      buttonText: text
    })
  }

  render() {
    return (
      <div>
        {this.state.buttonText === 'Unmount' ? <Time /> : null}
        <button
          onClick={() => 
            this.renderButtonText()
          }
        >
          {this.state.buttonText}
        </button>
      </div>
    );
  }
}
