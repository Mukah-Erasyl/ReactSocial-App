import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';

const Dialog3 = (props) => {
    let pathh = "./dialog/" + props.id;
    return (

        <div className={s.fighter}>
            <div>
                <img src='https://avatars.mds.yandex.net/i?id=d86e548b58fd4a6535b8ee813cc2e0a7-5497668-images-thumbs&n=13&exp=1'/>

            </div>
            <div className={s.name}>
            Dustin Poirier
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

export default Dialog3;