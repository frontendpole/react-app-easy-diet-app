import React from 'react';
import classes from '../Choice.module.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const choiceEnergy = (props) => {
  return (
    <div className={classes.Choice} style={{ backgroundColor: 'rgb(211, 117, 117)' }}>
      <Link to='EnergyDemandCalculator'>Energy Demand</Link>
    </div>
  );
}

export default choiceEnergy;