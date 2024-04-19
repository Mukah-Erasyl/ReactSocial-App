import ES1 from '../accets/music/01ES.mp3';
import ES2 from '../accets/music/02ES.mp3';
import ES3 from '../accets/music/03ES.mp3';
import MA1 from '../accets/music/04MA.mp3';
import MA2 from '../accets/music/05MA.mp3';
import MA3 from '../accets/music/06MA.mp3';
import NS1 from '../accets/music/07NS.mp3';

let initialState = { 
    musicData : [
      {id : 1 , author : "Sergey Eybog" , name : "Everlasting Summer" , audioSource : ES1 } ,
      {id : 2 , author : "Sergey Eybog" , name : "A Promise From Distant Days" , audioSource : ES2 } ,
      {id : 3 , author : "Sergey Eybog" , name : "Let's Be Friends" , audioSource : ES3} ,
      {id : 4 , author : "Myiagi" , name : "I got love" , audioSource : MA2 } ,
      {id : 5 , author : "Myiagi" , name : "Половина моя" , audioSource : MA3 } ,
      {id : 1 , author : "Myiagi" , name : "Люби" , audioSource : MA3 } ,
      {id : 1 , author : "Ikimono-gakari" , name : "Blue Bird" , audioSource : NS1 } ,
    ]
};



const musicReducer = (state = initialState , action) => {
  switch(action.type) {

  
 
  default : 
      return state ;
}
  

}

export default musicReducer;