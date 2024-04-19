import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';

const Dialog4 = (props) => {
    let pathh = "./dialog/" + props.id;
    return (

        <div className={s.fighter}>
            <div>
                <img src='https://avatars.mds.yandex.net/i?id=6fc4d67092e77afd700183f7f4b8e8e5-3910716-images-thumbs&n=13'/>

            </div>
            <div className={s.name}>
            Islam_Makhachev
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

export default Dialog4;