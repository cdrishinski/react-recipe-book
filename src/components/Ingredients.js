import React, { Component } from 'react'

class ingredients extends Component {
  render () {
    return (
        <div>
            <ul>
                {this.props.list.map((item, index) => <li key={index}>{item.name} - {item.amount} {item.measurement} </li>)}
                {/* {this.props.list.map((ingredient, index) => <li key={index}>{ingredient}</li>)} */}
            </ul>
            
        </div>
    )
  }
}

export default ingredients;