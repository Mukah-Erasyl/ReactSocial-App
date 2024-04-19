
import React from 'react';
import Post from './post/post';
import s from "./MyPost.module.css";


const MyPost = (props) => {
    
    let PostAtrData = props.PostAtr.map(
        
        element => <Post message = {element.message} key = {element.id} likeCount = {element.likeCount} />
    )
    return (

        

    <div className= {s.post}>
        {PostAtrData}
        


        </div>
        )
}
export default MyPost;