import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import { BrowserRouter, Navigate, NavLink, Route, Routes  } from 'react-router-dom';
import { addPostActionCreator, updateOnChangePostActionCreator } from '../../Redux/dialog_reducer';


import AvatarItem from './AvatarItem/AvatarItem';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import MessageItem from './MessageItem/MessageItem';





const Dialogs = (props) => {
    
    let dialogsEl = props.dialog.dialogsData.map(
        dialog => <DialogItem name={dialog.name } key = {dialog.id} id={dialog.id} />
    )
  
    
    let messagesEl = props.dialog.messagesData.map(
        message => <MessageItem message={message.message} key = {message.id}/>
    )
    let avatarEl = props.dialog.dialogsData.map(
        avatar => <NavLink to={'/dialogs/dialog' + avatar.id}><AvatarItem photo={avatar.photo} key = {avatar.id} /></NavLink>
    )
    let newMessage = React.createRef();
  
     let callBack = () => {
        
       props.addPost();
    
        
    }
    let onPostChange = () => {
        let text = newMessage.current.value;
        props.updateOnChange(text);
        
        

    }
    if(!props.isAuth) return <Navigate to = "/login/" /> ; 

    
        
    return (
        <div className={s.dialogs}>
            
                <div className={s.avatarItem} >
                    {avatarEl}
                </div>
                <div className={s.dialogItems}>
                    {dialogsEl}

                </div>
          

                
            <div className={s.messages}>
            
                {messagesEl}
                <div className={s.search}>
                <textarea onChange={onPostChange} ref={newMessage}  value = {props.newPostChange}/>
                <button onClick={callBack} >Add message</button>
                </div>
            
           
                

            </div>
            
        </div>
    )
}


export default Dialogs; 