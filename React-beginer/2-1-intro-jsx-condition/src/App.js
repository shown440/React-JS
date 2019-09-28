import React, { Component, Fragment } from 'react';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  
  render(){
    const name = "Github"
    const loading = true
    return (
      <Fragment>
        <h1>Find your friend with { name }</h1>
        <h2>Welcome to Infinitive Finder</h2>
        { loading ? <h4>Loading ...</h4> : <h4>Find your friend with Infinitive Finder</h4> }
      </Fragment>
    );
  }
}

export default App;
