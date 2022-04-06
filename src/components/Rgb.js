import { Component } from "react"

import "../styles/main.scss"

export default class Rgb extends Component {
  constructor() {
    super();

    this.state = {
      red: 0,
      green: 0,
      blue: 0
    }
  }

  handleSlider(valueOne, valueTwo, valueThree) {
    this.setState({
      red: valueOne,
      green: valueTwo,
      blue: valueThree
    })
    console.log(this.state.red, this.state.green, this.state.blue)
  }

  render() {
    return (
      <div>
        <div className="color-box" style={{backgroundColor: `rgb(${this.state.red},${this.state.green},${this.state.blue})`}}></div>
        <div>rgb({this.state.red}, {this.state.green}, {this.state.blue})</div>
        <input onChange={(e => this.handleSlider(e.target.value,this.state.green,this.state.blue))} defaultValue={0} type="range" id="points" name="points" min="0" max="255"/>
        <input onChange={(e => this.handleSlider(this.state.red,e.target.value,this.state.blue))} defaultValue={0} type="range" id="points" name="points" min="0" max="255"/>
        <input onChange={(e => this.handleSlider(this.state.red,this.state.green,e.target.value))} defaultValue={0} type="range" id="points" name="points" min="0" max="255"/>
      </div>
      )
  }
}