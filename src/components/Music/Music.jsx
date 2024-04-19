import React from 'react';
import s from './Music.module.css';
import MusicItem from './MusicItem/MusicItem';
import musicPNG1 from '../../accets/images/musicPNG1.png'
import musicPNG2 from '../../accets/images/musicPNG2.png'
import musicPNG3 from '../../accets/images/musicPNG4.png'
import musicPNG4 from '../../accets/images/musicPNG6.png'

const Music  = (props) => {
    let musicEl = props.music.map(
        object => <MusicItem musicSource={object.audioSource} key = {object.id} author = {object.author} musicName = {object.name}/>
    )
    return (
        <div>
            <div className={s.musicBlock}>
                <div className={s.head}> 
                <div><h2>Music</h2></div>
                <div className={s.headPictires}>
                    <div className={s.headPicture}><img src = {musicPNG1}/></div>
                    <div className={s.headPicture}><img src = {musicPNG3}/></div>
                    <div className={s.headPicture}><img src = {musicPNG4}/></div>
                </div>
                </div>
                {musicEl}

            </div>
        </div>
    )
    }


    export default Music ; 