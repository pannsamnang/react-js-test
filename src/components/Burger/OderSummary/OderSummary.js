import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {

  render() {
    const summaryIngredients = Object.keys(this.props.ingredients).map(ingredient => {
                                return (
                                  <li key={ingredient}>
                                    <span>{ingredient}:</span> {this.props.ingredients[ingredient]}
                                  </li>
                                )
                              });
    return (
      <Aux>
        <h3>Your order burger summary</h3>
        <p>Your ingredient are:</p>
        <ul>
          {summaryIngredients}
        </ul>
        <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
        <p>Click continue to check out</p>
        <Button btnType="danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
        <Button btnType="success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
      </Aux>
    )
  }
}

export default OrderSummary;