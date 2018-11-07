import React from 'react';
import Aux from '../../../hoc/Aux'

const OrderSummary = (props) => {
  const summaryIngredients = Object.keys(props.ingredients).map(ingredient => {
                              return (
                                <li key={ingredient}>
                                  <span>{ingredient}:</span> {props.ingredients[ingredient]}
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
    </Aux>
  )
}

export default OrderSummary;