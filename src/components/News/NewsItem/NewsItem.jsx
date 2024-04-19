import React from 'react';
import s from '../News.module.css';



const NewsItem = (props) => {
    
    return (

        <div className={s.commonNewsEl}> 
            <div><span>{props.day}: </span></div>
            <div><img className={s.PhotoNewsEl} src={props.newsPhoto}/></div>
            <div className={s.text}>{props.news}</div>
            <div className={s.source}>Ссылка на источник : <a href={"https://lenta.ru/rubrics/world/</div>"}>Здесь</a></div>
            
            
        </div>



    )
}

export default NewsItem;