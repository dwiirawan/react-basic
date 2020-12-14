import React, { Component } from 'react';
import Post from './Post';
import axios from 'axios';


class AksesAPI extends Component{
    state = {
        posts: []
    }

    getData = () => {
        axios
            .get('http://jsonplaceholder.typicode.com/posts')
            .then(result => {
                console.log(result);
                this.setState({
                    posts: result.data
                })
            })
            .catch(err=>{
                throw err
            })
    }

    componentDidMonth() {
        this.getData();
    }

    render() {
        return(
            // this.state.posts.map(post => {
            //     return <Post 
            //         key={post.id}
            //         title={post.title}
            //         body={post.body}
            //     />;
            // })
            <div>
                {console.log(this.state.posts)}
                <Post title="Judul" body="Isi Artikel"/>
            </div>
        );
    }
}
export default AksesAPI;