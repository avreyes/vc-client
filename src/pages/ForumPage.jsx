import React, { Component } from 'react';
//import styled from 'styled-components';
import './ForumPage.css';

class ForumPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        const url = 'http://localhost:3050/posts/all'
        fetch(url)
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
export default ForumPage;