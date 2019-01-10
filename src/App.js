import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CoolMap from './map/CoolMap';
import CustomProgressBar from './progressbar/CustomProgressBar' 

class App extends Component {
  render() {
    return (
      <div className="App">
         <CoolMap selectedCountry="us" />
         <CustomProgressBar value="50" />
      </div>
    );
  }
}

export default App;
