import { Component } from "react";

export default class PushAround extends Component {
  constructor() {
    super();

    this.state = {
      display: 'center'
    }
  }

  handleDisplayChange(align) {
    this.setState({
      display: align
    })
  }

  render() {
    return (
      <div>
        <h1 style={{textAlign: this.state.display}}>Push Me Around</h1>
        <button onClick={() => this.handleDisplayChange('left')}>Left</button>
        <button onClick={() => this.handleDisplayChange('center')}>Center</button>
        <button onClick={() => this.handleDisplayChange('right')}>Right</button>
      </div>
      )
  }
}