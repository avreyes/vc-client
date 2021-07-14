import React from 'react';
import { Jumbotron } from 'reactstrap';
import CreatePost from '../Posts/CreatePost';
import ProfileIndex from '../pages/userpage/ProfileIndex';

export default function ForumPage (props) {

    

    return (

        <div className='container'>
            <Jumbotron>
                <p className='lead'>
                    <ProfileIndex token={props.token} />
                </p>
            </Jumbotron>
            
        </div>
    )
}




// import React, {Component} from 'react';
// //import { useParams } from 'react-router-dom';
// //import  PostsIndex from '../Posts/PostsIndex';
// import { Container, Jumbotron } from 'reactstrap';


// class UserPage extends Component {
//     //let { id } = useParams();
//     constructor(props) {
//         super(props);
//         this.state = {
//             userId: []
//         }
//     }
//     componentDidMount() {
//         const url = 'http://localhost:3050/user/userInfo/:id'
//         fetch(url, {
//             method: 'GET',
//             headers: new Headers ({
//                 'Content-Type': 'application/json',
//                 'Authorization': this.props.token
//             })
//         })
//         .then(response => response.json())
//         .then(json => this.setState({ userId: json }))
//     }   

    
//     render() {
//         const { userId } = this.state;
//         return (
//             <Container>
//                 <Jumbotron>
//                     <h1 className='display-4'>Welcome Back</h1>
//                     <hr className='my-2'/>
//                 </Jumbotron>
//                 { userId.map((user) => (
//                     <div className='card' key={ user.UUid }>
//                         <div className='card-header'>
//                             User Info
//                         </div>
//                         <ul class='list-group'>
//                             <li class='list-group-item'>{ user.firstName }</li>
//                             <li class='list-group-item'>{ user.birthday }</li>
//                             <li class='list-group-item'>{ user.email }</li>
//                             <li class='list-group-item'>{ user.zodiac }</li>
//                         </ul>
//                         <div className='card-header'>
//                             <button type='button' className='btn btn-primary' data-bs-toggle='modal' data-bs-target='#editModal'>Edit</button>
//                             <button type='button' className='btn btn-primary' data-bs-toggle='modal' data-bs-target='#deleteModal'>Delete</button>
//                         </div>

//                     </div>
//                 ))}
//             </Container>
//         )
//     }
// }

// export default UserPage;
