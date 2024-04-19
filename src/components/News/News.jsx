import React from 'react';
import NewsItem from './NewsItem/NewsItem';
import s from './News.module.css';




const News  = (props) => { 
    let newsEl = props.news.map(
        object => <NewsItem day={object.day} key = {object.id} news = {object.news} newsPhoto = {object.newsPhoto}/>
    )


    return (
        <div>
            <div className={s.head}> 
                <div><h2>News</h2></div>
               
                </div>
             {newsEl}
        </div>
    )
    }


    export default News ; 