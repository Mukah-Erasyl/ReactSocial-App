import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Dialog.module.css";

const Dialog2 = (props) => {
    let pathh = "./dialog/" + props.id;
    return (

        <div className={s.fighter}>
            <div>
                <img src='https://avatars.mds.yandex.net/i?id=6a766a480611ea3fe72ab54955f84348-4393175-images-thumbs&n=13&exp=1'/>

            </div>
            <div className={s.name}>
            Justin Gaethje
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

export default Dialog2;