import { Component } from "react"

export default class HideMe extends Component {
  constructor() {
    super();

    this.state = {
      value: true,
      buttonText: 'Hide'
    }
    this.handleHideShow = this.handleHideShow.bind(this)
  }
    handleHideShow() {
      const newButtonText = this.state.buttonText === 'Hide' ? 'Show' : 'Hide'

      this.setState((state) => ({
        value: !state.value,
        buttonText: newButtonText
      })
    )
    
    }

    render() {
      return (
        <div>
          <h1 style={this.state.value ? {visibility: 'visible'}: {visibility: 'hidden'}}>Hide Me</h1>
          <button onClick={this.handleHideShow}>{this.state.buttonText}</button>
        </div>
        )
    }
  }
