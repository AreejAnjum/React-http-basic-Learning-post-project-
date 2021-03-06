import React, { Component } from 'react';
import axios from 'axios'
import './FullPost.css';

class FullPost extends Component {

    state={
        loadedPost: null
    }

    componentDidUpdate(){
        if(this.props.id){

            // to control  unlimited request calls
            if(!this.state.loadedPost || this.state.loadedPost && this.state.loadedPost.id !== this.props.id){
            axios.get('/posts/'+ this.props.id)
            .then(response=>{
            this.setState({loadedPost: response.data})
            })
            }
        }  }

        postDeleteHandler=()=>{
            axios.delete('/posts/'+ this.props.id)
            .then((response)=>{
                console.log('[response] from post deleted', response)
            })
        }

    render () {


        let post = <p style={{textAlign :'center'}}>Please select a Post!</p>;
        if(this.state.id){<p>Loading...</p>}
        if(this.state.loadedPost){
            post = (
            <div className="FullPost">
                <h1>{this.state.loadedPost.title}</h1>
                <p>{this.state.loadedPost.body}</p>
                <div className="Edit">
                    <button onClick={this.postDeleteHandler} className="Delete">Delete</button>
                </div>
            </div>

        );}
        
        return post;
    }
}

export default FullPost;