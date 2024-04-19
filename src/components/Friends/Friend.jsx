import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Friend.module.css";
import store from '../../Redux/state';





const Friends = (props) => {

    return (
        <div>
            <div className={s.title}>Friends</div>
            <div className={s.imgs}>
            {store._state.dialog.dialogsData.map( u=> 
            <NavLink to={'/dialogs/dialog' + u.id} key = {u.id} > <img src={u.photo} key = {u.id} /> </NavLink>

            )}
            </div>




        </div>

    )
}

export default Friends;