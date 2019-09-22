// Core library Import
import React, { Component, Fragment } from 'react';

// Custom library import
// Custom Components
import Navbar from './components/layout/Navbar'; 
// import UserItem from './components/users/UserItem'
import Users from './components/users/Users'

// Custom CSS
import './App.css';


class App extends Component {

  render(){
    // const numbers = [1,2,3,4];
    return (
      <div className="App">
          <Navbar />
          <div className="container">
            <Users />
            <Users />
            <Users />
          </div>
      </div>
    );
  }
}

export default App;
