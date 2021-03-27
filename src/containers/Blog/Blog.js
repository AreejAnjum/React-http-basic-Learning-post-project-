import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from '../../axios/axiosInstances'

class Blog extends Component {

    state={
        posts: [],
        selectedPostId: null, 
        error: false
    }

    postSelectHandler=(id)=>{
        this.setState({selectedPostId: id})
    }

    componentDidMount(){
        axios.get('/posts') //this is aysnchoronus
        .then((response)=>
        {const post = response.data.slice(0,4)  // to get limited posts
        const updatedPost= post.map((post)=>{
            return ({
                ...post,
                author: "Areej Anjum"
            })
        })
        this.setState({posts: updatedPost})
        console.log("[Response] ", response)}// can only setstate in then 
    ).catch((error)=>{
        console.log(error);
        this.setState({error: true})
    })
    }


    render () {
      
        let post= <p style={{textAlign :'center'}}>Something went wrong</p>
// error handling 
        if(!this.state.error){
            post = this.state.posts.map((post)=>{
                return(<Post key={post.id + post.title}
                title={post.title}
                author={post.author}
                clicked={()=>this.postSelectHandler(post.id)}
                />)})}
        
        return (
            <div>
                <section className="Posts">
                    {post}
            
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        )
    
}
}
export default Blog;