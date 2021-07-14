import React from 'react';
import { Jumbotron } from 'reactstrap';
import CreatePost from '../Posts/CreatePost';
import PostsIndex from '../Posts/PostsIndex';

export default function ForumPage (props) {

    

    return (

        <div className='container'>
            <Jumbotron>
                <h1 className='display-3'>Zodiac Chat</h1>
                <p className='lead'>Read what other users are saying about your zodiac.. or, click the link below to make your own post!</p>
                <hr className='my-2' />
                <p className='lead'>
                    <CreatePost token={props.token}/>
                </p>
            </Jumbotron>
            <PostsIndex token={props.token} />
        </div>
    )
}



// import React, { Component } from 'react';
// //import styled from 'styled-components';
// import './ForumPage.css';

// class ForumPage extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             posts: []
//         }
//     }
//     componentDidMount() {
//         const url = 'http://localhost:3050/posts/all'
//         fetch(url)
//         .then(response => response.json())
//         .then(json => this.setState({ posts: json }))
//     }

//     render () {
//         const { posts } = this.state;
//         return (
//             <div className='container'>
//                 <div class='jumbotron'>
//                     <h1 class='display-4'>Forum Posts</h1>
//                 </div>
//                 { posts.map((post) => (
//                     <div className='card' key={ post.id }>
//                         <div className='card-header'>
//                             { post.title } Date: { post.date } Sign: { post.sign }
//                         </div>
//                         <div className='card-body'>
//                             <p className='card-text'>{ post.entry }</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         );
//     }
// }
// export default ForumPage;