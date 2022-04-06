import { Component} from "react"

export default class GrowShrink extends Component {
  constructor() {
    super();

    this.state = {
      pixelSize: 20
    }
  }

  handleGrowShrink(amt) {
    const newPixels = this.state.pixelSize + amt;

    this.setState({
      pixelSize: newPixels
    })
  }

  render() {
    return (
      <div>
        <button disabled={this.state.pixelSize === 100} onClick={() => this.handleGrowShrink(5)}>grow</button>
        <button disabled={this.state.pixelSize === 15} onClick={() => this.handleGrowShrink(-5)}>shrink</button>
        <h1 style={{fontSize: this.state.pixelSize + 'px'}}>{this.state.pixelSize}px</h1>
      </div>
      )
  }
}