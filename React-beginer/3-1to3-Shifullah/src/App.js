// Core library Import
import React, { Component, Fragment } from 'react';

// Custom library import
// Custom Components
import Navbar from './components/layout/Navbar'; 
import UserItem from './components/users/UserItem'

// Custom CSS
import './App.css';


class App extends Component {

  render(){
    // const numbers = [1,2,3,4];
    return (
      <div className="App">
          <Navbar />
          <UserItem />
      </div>
    );
  }
}

export default App;
