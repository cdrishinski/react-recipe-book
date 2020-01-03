import React, { Component } from 'react'

class Steps extends Component {
  render() {
    return (
      <div>
        <h3>Steps:</h3>
        <ul>
          {this.props.list.map((item, index) => <ol key={index}>{index + 1}. {item}</ol>)}
        </ul>

      </div>
    )
  }
}

export default Steps;