import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Aux from '../../hoc/Aux'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OderSummary/OderSummary';

const ingredients = {
  salad: 0.5,
  cheese: 1,
  meat: 1.2,
  bacon: 1.5
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      meat: 0,
      bacon: 0
    },
    price: 4,
    purchasable: false,
    purchasing: false
  }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients).map(ingredientKey => {
                  return ingredients[ingredientKey];
                }).reduce((sum, el) => {
                  return sum + el;
                }, 0);
    this.setState({purchasable: sum > 0})
  }

  addIngredient = (type) => {
    const oldCount = this.state.ingredients[type];
    const updateCount = oldCount + 1;
    const updateIngredients = {
      ...this.state.ingredients
    };
    updateIngredients[type] = updateCount;
    const newPrice = this.state.price + ingredients[type]
    this.setState({price: newPrice, ingredients: updateIngredients})
    this.updatePurchaseState(updateIngredients)
  }

  removeIngredient = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount > 0) {
      const updateCount = oldCount-1;
      const updateIngredients = { ...this.state.ingredients };
      updateIngredients[type] = updateCount;
      const newPrice = this.state.price - ingredients[type];
      this.setState({price: newPrice, ingredients: updateIngredients})
      this.updatePurchaseState(updateIngredients)
    }
  }

  purchaseHandler = () => {
    this.setState({purchasing: true})
  }

  closeModalHandler = () => {
    this.setState({purchasing: false})
  }

  render() {
    const disabledInfo = {...this.state.ingredients}
    for(let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClose={this.closeModalHandler}><OrderSummary ingredients={this.state.ingredients} /></Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredient={this.addIngredient}
          removeIngredient={this.removeIngredient}
          disabledInfo={disabledInfo}
          price={this.state.price}
          ordered={this.purchaseHandler}
          purchasable={this.state.purchasable} />
      </Aux>
    )
  }
}

export default BurgerBuilder