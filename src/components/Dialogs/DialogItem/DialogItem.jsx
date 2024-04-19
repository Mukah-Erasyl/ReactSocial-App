import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';

const DialogItem = (props) => {
    let pathh = "./dialog/" + props.id;
    return (

        <div>
        
        <NavLink className={s.dialog + ' ' + s.active} to={pathh}>
            
            {props.name}
        </NavLink>
        </div>

    )
}

export default DialogItem;