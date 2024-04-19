
import React from 'react';
import Post from './post/post';
import s from "./MyPost.module.css";
import MyPost from './MyPost';
import { connect } from 'react-redux';


// const MyPostContainer = (props) => {
    

   
//     return (

        

//     <MyPost postAtr = {props.store.getState().profile.postAtr}/>
//         )
// }

let mapStateToProps = (state) => {
    
    return {
       
        PostAtr : state.profile.PostAtr
    }
    

}

const MyPostContainer = connect(mapStateToProps) (MyPost);

export default MyPostContainer;