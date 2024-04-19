
import React from 'react';
import { Navigate } from 'react-router-dom';
import s from "./content.module.css";
import FileInfo from './MyPosts/FileInfo/FileInfo';
import FileInfoContainer from './MyPosts/FileInfo/FileInfo-Container';
import MyPost from './MyPosts/MyPost';
import MyPostContainer from './MyPosts/MyPostContainer';


const Content = (props) => {
    
    
    

    return <div className={s.content}>
        <FileInfoContainer profile = {props.profile} status = {props.status}
         putStatusContent = {props.putStatusContent}/>
        
        <MyPostContainer />
        </div>
        
    }
    

export default Content;