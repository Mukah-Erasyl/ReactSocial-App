import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';


const MessageItem = (props) => {
    
    return (

        <div className={s.message}>
            <div> {props.message}</div>
            
        </div>



    )
}

export default MessageItem;