import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import './BuildControls.css'

const controls = [
  { label: 'Salad', type: 'salad'},
  { label: 'Cheese', type: 'cheese'},
  { label: 'Meat', type: 'meat'},
  { label: 'Bacon', type: 'bacon'}
];
const BuildControls = (props) => (
  <div className="build-controls">
    {controls.map(control => (
      <BuildControl
        key={control.label}
        label={control.label}
        addMore={() => props.addIngredient(control.type)}
        removeIngredient={() => props.removeIngredient(control.type)}
        disable={props.disabledInfo[control.type]} />
    ))}
  </div>
)

export default BuildControls;