import React from 'react';
import { NavLink } from 'react-router-dom';
import Friends from '../Friends/Friend';
import s from "./navBar.module.css";




const NavBar = (props) => {
    return (
        <nav className={s.nav}>
        <div className={s.item}>
           <NavLink to = "/profile" className = { navData => navData.isActive ? s.active : s.item }>Profile  </NavLink>
        </div>
        <div>
            <NavLink to = "/dialogs" className = { navData => navData.isActive ? s.active : s.item }>Messages  </NavLink>
        </div>
        <div>
            <NavLink to = "/users" className = { navData => navData.isActive ? s.active : s.item }>Users  </NavLink>
        </div>
        <div>
            <NavLink to = "/news" className = { navData => navData.isActive ? s.active : s.item }>News  </NavLink>
        </div>
        <div>
            <NavLink to = "/music" className = { navData => navData.isActive ? s.active : s.item }>Music  </NavLink>
        </div>
        <div>
            <NavLink to = "/setting" className = { navData => navData.isActive ? s.active : s.item }>Setting  </NavLink>
        </div>
        <div className={s.friendBar}>
            <Friends />
        </div>

        </nav>
        )
}

export default NavBar;