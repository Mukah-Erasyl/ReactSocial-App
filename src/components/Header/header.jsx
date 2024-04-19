
import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from "./header.module.css";
import headAva1 from "../../accets/images/head1.png";
import headAva2 from "../../accets/images/head2.png";
import headAva3 from "../../accets/images/head3.png";
import headAva4 from "../../accets/images/head4.png";


function Header(props) {
    return (

        <div className={classes.head} >
            <div className={classes.high_pos}>
                <header className={classes.header}> <img src="https://avatars.mds.yandex.net/i?id=df85cd0e7a112c8000b1ecd7ba0e7a0a-5234412-images-thumbs&n=13" />
                </header>
                <nav className={classes.high_links}>
                {props.isAuth?props.login :
                    <NavLink to = "/login"> Sign in</NavLink>}
                    <NavLink to='/profile'>
                    <img src='https://avatars.mds.yandex.net/i?id=c8b3607c2857bd49501e1697afb4ceb9-5688986-images-thumbs&n=13'/>
                    </NavLink>
                </nav>
            </div>

            <nav className={classes.low_links}>
                <div className={classes.headAvas}>
                    <div className={classes.headAva}><img src = {headAva1}/></div>
                    <div className={classes.headAva}><img src = {headAva2}/></div>
                    <div className={classes.headAva}><img src = {headAva3}/></div>
                    <div className={classes.headAva}><img src = {headAva4}/></div>
                </div>

            </nav>

        </div>

    )

}
export default Header;

