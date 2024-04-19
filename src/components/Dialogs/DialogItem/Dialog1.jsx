import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';

const Dialog1 = (props) => {
    let pathh = "./dialog/" + props.id;
    return (

        <div className={s.fighter}>
            <div>
                <img src='https://avatars.mds.yandex.net/i?id=ca098cfe49bb34a8b590963024de3724-5467261-images-thumbs&n=13'/>

            </div>
            <div className={s.name}>
                Charles Oliveira
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    <span>
                        Hello , i'm champ
                    </span>

                </div>
                <div className={s.message}>
                    <span>
                        Give me fucking McGreogor
                    </span>

                </div>
                <div className={s.message}>
                    <span>
                        Its not my trouble with weight
                    </span>

                </div>
            </div>


        </div>

    )
}

export default Dialog1;