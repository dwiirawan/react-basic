import React, { Component } from 'react';
import Post from './Post';
import axios from 'axios';


class AksesAPI extends Component{
    state = {
        posts: []
    }

    getData = () => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts/')
            .then(result => {
                this.setState({
                    posts: result.data
                })
            })
            .catch(err=>{
                throw err
            })
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        // return(
        return this.state.posts.length > 0 ? (
            this.state.posts.map(post => {
                return <Post 
                    key={post.id}
                    title={post.title}
                    body={post.body}
                />;
            })
            ) : (
                <h1>Loading...</h1>

            // <div>
            //     {console.log(this.state.posts)}
            //     <Post title="Judul" body="Isi Artikel"/>
            // </div>
        );
    }
}
export default AksesAPI;