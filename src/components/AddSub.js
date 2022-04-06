import { Component } from "react";

export default class AddSub extends Component {
  constructor() {
    super();

    this.state = {
      num: 0,
    };
  }

  handleIncDec(amt) {
    const newNum = amt + this.state.num;
    this.setState({
      num: newNum
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.num}</h1>
        <button onClick={() => this.handleIncDec(1)}>Add</button>
        <button disabled={this.state.num === 0} onClick={() => this.handleIncDec(-1)}>Sub</button>
      </div>
    );
  }
}
