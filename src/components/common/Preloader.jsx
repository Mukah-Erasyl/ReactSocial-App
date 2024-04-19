import React from "react";
import s from './Preloader.module.css';
import preloaderGif from '../../accets/gifs/preloaderGif3.gif';


const Preloader = (props) => {

     return (
    <div className={s.preloaderGifLay}>
            <img src={preloaderGif} className = {s.preloaderGif}/> 
            </div>
     )

}

export default Preloader ;