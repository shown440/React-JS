import React, { Component } from 'react'

// Custom library import
// Custom Components
import UserItem from './UserItem'

class Users extends Component {

    state = {
        users: [
            {
                id: '1',
                login: 'Shifullah',
                avatar_url: 'https://avatars0.githubusercontent.com/u/41927235?s=400&u=a021ff2622878dd820c4add134ba45990d91bc76&v=4',
                html_url: 'https://github.com/shown440',
            },
            {
                id: '2',
                login: 'Defunket',
                avatar_url: 'https://avatars0.githubusercontent.com/u/41927235?s=400&u=a021ff2622878dd820c4add134ba45990d91bc76&v=4',
                html_url: 'https://github.com/shown440',
            },
            {
                id: '3',
                login: 'Mojombo',
                avatar_url: 'https://avatars0.githubusercontent.com/u/41927235?s=400&u=a021ff2622878dd820c4add134ba45990d91bc76&v=4',
                html_url: 'https://github.com/shown440',
            }
        ]
    }

    render() {
        return (
            <div style={userStyle}>
                {this.state.users.map(user => (
                    <UserItem key={user.id} user={user}/>  
                ))}
            </div>
        )
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem',
}

export default Users
