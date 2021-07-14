import React, {Component} from 'react';
//import { useParams } from 'react-router-dom';
//import  PostsIndex from '../Posts/PostsIndex';


class ProfileIndex extends Component {
    //let { id } = useParams();
    constructor(props) {
        super(props);
        this.state = {
            userId: []
        }
    }
    componentDidMount() {
        const url = 'http://localhost:3050/user/userInfo/:id'
        fetch(url, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
        .then(response => response.json())
        .then(json => this.setState({ userId: json }))
    }   

    
    render() {
        const { userId } = this.state;
        return (
            <div className='container'>
                <div className='jumbotron'>
                    <h1 className='display-4'>Hello</h1>
                </div>
                { userId.map((user) => (
                    <div className='card' key={ user.UUid }>
                        <div className='card-header'>
                            User Info
                        </div>
                        <ul class='list-group'>
                            <li class='list-group-item'>{ user.firstName }</li>
                            <li class='list-group-item'>{ user.birthday }</li>
                            <li class='list-group-item'>{ user.email }</li>
                            <li class='list-group-item'>{ user.zodiac }</li>
                            <li class='list-group-item'>{ user.about }</li>
                        </ul>
                        {/* <div className='card-header'>
                            <button type='button' className='btn btn-primary' data-bs-toggle='modal' data-bs-target='#editModal'>Edit</button>
                            <button type='button' className='btn btn-primary' data-bs-toggle='modal' data-bs-target='#deleteModal'>Delete</button>
                        </div> */}

                    </div>
                ))}
            </div>
        )
    }
}

export default ProfileIndex;