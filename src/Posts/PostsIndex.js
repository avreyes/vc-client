import React, { Component } from 'react';
//import styled from 'styled-components';
import '../pages/ForumPage.css';

class PostsIndex extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        const url = 'http://localhost:3050/posts/all'
        fetch(url, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
        .then(response => response.json())
        .then(json => this.setState({ posts: json }))
    }

    render () {
        const { posts } = this.state;
        return (
            <div className='container'>
                <div class='jumbotron'>
                    <h1 class='display-4'>Forum Posts</h1>
                </div>
                <div class='jumbotron'>
                    <h2 class='display-4'>Create a New Post</h2>
                    
                </div>
                { posts.map((post) => (
                    <div className='card' key={ post.id }>
                        <div className='card-header'>
                            { post.title } Date: { post.date } Sign: { post.sign }
                        </div>
                        <div className='card-body'>
                            <p className='card-text'>{ post.entry }</p>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}
export default PostsIndex;



// import React, {useState, useEffect} from 'react';
// import { Container, Row, Col } from 'reactstrap';
// import CreatePost from './CreatePost';

// const PostsIndex = (props) => {

//     const [posts, setPosts] = useState([]);

//     const fetchPosts = () => {
//         fetch('http:localhost:3050/posts/all', {
//             method: 'GET',
//             headers: new Headers ({
//                 'Content-Type': 'application/json',
//                 'Authorization': props.token
//             })
//         }).then ((res) => res.json())
//         .then((data) => {
//             setPosts(data)
//         })
//     }

//     useEffect (() => {
//         fetchPosts();
//     })

//     return(
//         <Container>
//             <Row>
//                 <Col md='3'>
//                     <CreatePost fetchPosts = { fetchPosts } token = {props.token}/>
//                 </Col>
//                 <Col md='9'>
//                     <h2>Your Posts:</h2>
//                 </Col>
//             </Row>
//         </Container>
//     )
// }
// export default PostsIndex;