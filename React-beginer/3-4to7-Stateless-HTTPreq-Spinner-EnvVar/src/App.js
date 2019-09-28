// Core library Import
import React, { Component} from 'react';
import axios from 'axios'; // use for call api in production level

// Custom library import
// Custom Components
import Navbar from './components/layout/Navbar'; 
// import UserItem from './components/users/UserItem'
import Users from './components/users/Users'

// Custom CSS
import './App.css';


class App extends Component {

  state = {
    users: [],
    loading: false,
  };

  async componentDidMount(){
    console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);
    console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);

    this.setState({loading: true});

    const res = await axios.get('https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret={process.env.REACT_APP_GITHUB_CLIENT_SECRET}');
    // console.log(res.data);
    this.setState({users: res.data, loading: false});
  };

  render(){
    // const numbers = [1,2,3,4];
    return (
      <div className="App">
          <Navbar />
          <div className="container">
            <Users loading={this.state.loading} users={this.state.users}/>
          </div>
      </div>
    );
  }
}

export default App;
