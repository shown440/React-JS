// rce = class based component

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Search extends Component {
    state = {
        text: ''
    };

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired,
    };

    onChange = (myEvent) => {
        // this.setState({text: myEvent.target.value});
        this.setState({[myEvent.target.name]: myEvent.target.value});
        // Upper both lines will work same
        // console.log(this.setState({text: myEvent.target.value}));
    };

    onSubmit = (event) => {
        event.preventDefault();
        if(this.state.text === '') {
            this.props.setAlert('Please enter something', 'light');
        }else{
            // console.log(this.state.text);
            this.props.searchUsers(this.state.text); // this line send the props to App.js <Search />
            this.setState({text: ''});
        };
        
    };

    render() {
        const {showClear, clearUsers} = this.props;

        return (
            <div>
               <form onSubmit={this.onSubmit} className="form">
                    <input 
                        type="text"
                        name="text"  //this name will always use to call in onChange.
                        placeholder="Search user ..."
                        value={this.state.text}
                        onChange={this.onChange}
                    /> 
                    <input 
                        type="submit" 
                        value="Search" 
                        className="btn btn-dark btn-block"
                    /> 
                </form>
                {showClear && (
                    <button 
                        className="btn btn-light btn-block"
                        onClick={clearUsers}>
                            Clear
                    </button>  
                )}
                               
            </div>
        )
    };
};

export default Search
