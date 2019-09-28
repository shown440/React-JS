// Core library Import
import React, { Component} from 'react';
import axios from 'axios'; // use for call api in production level

// Custom library import
// Custom Components
import Navbar from './components/layout/Navbar'; 
// import UserItem from './components/users/UserItem'
import Users from './components/users/Users'
// Import search option
import Search from './components/users/Search'
// Import Alert
import Alert from './components/layout/Alert'; 


// Custom CSS
import './App.css';


class App extends Component {

  state = {
    users: [],
    loading: false,
    alert: null,
  };

  // Initial view of Github 1st 30 users
  async componentDidMount(){
    // console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);
    // console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);

    this.setState({loading: true});

    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    // console.log(res.data);
    this.setState({users: res.data, loading: false});
    
  };


  // Search Github Users
  searchUsers = async (text) => {
    this.setState({loading: true});

    // console.log(text)
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    // console.log(res.data);

    this.setState({users: res.data.items, loading: false});
  };
  // Clear Github Users from current state
  clearUsers =  () => {
    // const myres = this.componentDidMount();
    // console.log(myres);
    // const res = axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({users: [], loading: false});
  };

  // Set Alert for blank search
  setAlert = (msg, type) => {
    this.setState({alert: {msg: msg, type: type}});
    // console.log(msg, " | ", type)

    setTimeout( () => { this.setState({ alert: null }) }, 2000);
  };


  render(){
    // const numbers = [1,2,3,4];
    const {users, loading} = this.state;

    return (
      <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={this.state.alert}/>
            <Search 
              searchUsers={this.searchUsers} 
              clearUsers={this.clearUsers} 
              showClear={users.length>0 ? true:false}
              setAlert={this.setAlert}/>
            <Users 
              loading={loading} 
              users={users}/>
          </div>
      </div>
    );
  };
};

export default App;
