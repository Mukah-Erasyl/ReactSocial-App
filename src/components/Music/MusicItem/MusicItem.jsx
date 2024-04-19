import React from 'react';
import s from '../Music.module.css';
import musicIkon from '../../../accets/images/musicIkon.png'




const MusicItem = (props) => {
    
    return (

        <div className={s.musicItem}> 
        <div className={s.musicIkon}><img src={musicIkon} /></div>
            <figure>
    <figcaption><div className={s.musicName}>{props.musicName}</div>
    <div className={s.musicAuthor}><span>{props.author}</span></div>
    </figcaption>
    <audio className={s.audio}
        controls
        src={props.musicSource}>
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>
            
            
        </div>



    )
}

export default MusicItem;