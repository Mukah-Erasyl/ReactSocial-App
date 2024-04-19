import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';

const Dialog5 = (props) => {
    let pathh = "./dialog/" + props.id;
    return (

        <div className={s.fighter}>
            <div>
                <img src='https://avatars.mds.yandex.net/i?id=aefee6e9c5a0c6ec22e290e0e373438e-5859136-images-thumbs&n=13'/>

            </div>
            <div className={s.name}>
            Beneil Khobier Dariush
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

export default Dialog5;