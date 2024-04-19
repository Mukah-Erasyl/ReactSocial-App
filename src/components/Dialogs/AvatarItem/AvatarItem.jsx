import React from 'react';
import { NavLink } from 'react-router-dom';

const AvatarItem = (props) => {
    
    return (

        <div>
        <img src={props.photo} />
        </div>

    )
}

export default AvatarItem;