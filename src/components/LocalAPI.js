import React, { Component } from 'react';
import Post from './Post';
import axios from 'axios';


class LocalAPI extends Component{
    state = {
        posts: []
    }

    getData = () => {
        axios
            .get('http://localhost:5000/customer')
            .then(result => {
                // console.log(result)
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
                    key={post._id}
                    title={post.nama}
                    body={post.alamat}
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
export default LocalAPI;