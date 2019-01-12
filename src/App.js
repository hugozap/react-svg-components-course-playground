import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CoolMap from './map/CoolMap';
import CustomProgressBar from './progressbar/CustomProgressBar' 
import RobotArm from './robot-arm/RobotArm' 
import RobotArmAnimation1 from './robot-arm/RobotArmAnimation1' 
import RobotArmAnimation2 from './robot-arm/RobotArmAnimation2' 

class App extends Component {
  render() {
  	/*
  	     <CoolMap selectedCountry="us" />
         <CustomProgressBar value="50" />
         <RobotArm/>
         <RobotArmAnimation1/>
     */
    return (
      <div className="App">
         <RobotArmAnimation2/>
      </div>
    );
  }
}

export default App;
