import { Component } from 'react'

export default class ColorChange extends Component {
  constructor() {
    super();

    this.state = {
      color: 'black',
      input: ''      
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  handleInput(e) {
    const newInput = e.target.value
    this.setState({
      input: newInput
    })
  }

  handleColorChange() {
    this.setState({
      color: this.state.input
    })
  }

  render() {
    return (
      <div>
        <h1 style={{color: this.state.color}}>{this.state.color}</h1>
        <input type="text" onChange={this.handleInput}/>
        <button onClick={this.handleColorChange}>Change Color</button>
      </div>
      )
  }
}