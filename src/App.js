import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CoolMap from './map/CoolMap';
import CustomProgressBar from './progressbar/CustomProgressBar' 
import RobotArm from './robot-arm/RobotArm' 
import RobotArmAnimation1 from './robot-arm/RobotArmAnimation1' 
import RobotArmAnimation2 from './robot-arm/RobotArmAnimation2' 
import CircularProgress from './progress-knob/CircularProgress'

class App extends Component {
  
  constructor(props) {
    super(props);
  	this.state = {
  		progress:40
  	}
  }

  componentDidMount(){
  	setInterval(()=>{
  		this.setState({
  			progress: Math.random()*100,
  		})
  	}, 1000);
  }
  render() {
  	/*
  	     <CoolMap selectedCountry="us" />
         <CustomProgressBar value="50" />
         <RobotArm/>
         <RobotArmAnimation1/>
         <RobotArmAnimation2/>

     */
    return (
      <div className="App">
      	<CircularProgress value={this.state.progress} />
      </div>
    );
  }
}

export default App;
