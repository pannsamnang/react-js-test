import React from 'react';
import './BuildControl.css';

const BuildControl = (props) => (
  <div className="build-control">
    <button
      className="less"
      onClick={props.removeIngredient}
      disabled={props.disable}>{props.disable} Less</button>
    <div className="label">{props.label}</div>
    <button
      className="more"
      onClick={props.addMore}>More</button>
  </div>
)

export default BuildControl;