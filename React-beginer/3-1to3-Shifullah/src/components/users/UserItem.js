import React, { Component } from 'react'

class UserItem extends Component {

    constructor(){
        super();
        this.state = {
            id: 'id',
            login: 'Shifullah',
            avatar_url: 'https://avatars0.githubusercontent.com/u/41927235?s=400&u=a021ff2622878dd820c4add134ba45990d91bc76&v=4',
            html_url: 'https://github.com/shown440',
        }
    }

    render() {
        const {login, avatar_url, html_url} = this.state

        return (
            <div className="card text-center">
               
               <img src={avatar_url} className="round-img" alt="" style={{width: '100px'}}/>
               <h3>{login}</h3>
               <a href={html_url} className="btn btn-dark btn-sm my-1">More Information</a>
               
            </div>
        )
    }
}

export default UserItem
