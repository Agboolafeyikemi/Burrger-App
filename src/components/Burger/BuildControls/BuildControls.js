import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
  { label: "Bacon", type: "bacon" }
];

const buildcontrols = props => (
  <div className={classes.BuildControls}>
      <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        remove={() => props.removeIng(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
       
      />
    ))}
    <button onClick={props.ordered}disabled={!props.purchasable} className={classes.OrderButton}>ORDER NOW</button>
  </div>
);

export default buildcontrols;