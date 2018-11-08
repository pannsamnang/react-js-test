import React from 'react';
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'

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
      <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
      <p>Click continue to check out</p>
      <Button btnType="danger" clicked={props.purchaseCancelled}>CANCEL</Button>
      <Button btnType="success" clicked={props.purchaseContinued}>CONTINUE</Button>
    </Aux>
  )
}

export default OrderSummary;