import React from 'react'
import PropTypes from 'prop-types'

const UserItem = ({user:{login, avatar_url, html_url}}) => {

    // const {login, avatar_url, html_url} = props.user //this props is passing from Users.js component

    return (
        <div className="card text-center">
            
            <img 
            src={avatar_url} 
            className="round-img" 
            alt="" 
            style={{width: '100px'}}/>

            <h3>{login}</h3>
            <a href={html_url} className="btn btn-dark btn-sm my-1">More Information</a>
            
        </div>
    );
};

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
};

export default UserItem
