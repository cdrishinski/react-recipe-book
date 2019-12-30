import React, { Component } from 'react'

class Ingredients extends Component {
    render() {
        return (
            <div>
                <h3>Ingredients</h3>
                <ul>
                    {this.props.list.map((item, index) => <li key={index}>{item.name} - {item.amount} {item.measurement} </li>)}
                </ul>

            </div>
        )
    }
}

export default Ingredients;