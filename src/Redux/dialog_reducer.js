let ADDPOST = "ADD-POST";
let UPDATEONCHANGEPOST = "UPDATE-ON-CHANGE-POST";
let initialState = {
  dialogsData: [
      {name:'Charles' , id: 1 , photo: "https://avatars.mds.yandex.net/i?id=6fb105d059d99cc832048ba56fb63c20-4901575-images-thumbs&n=13" } ,
      {name:'Justin' , id: 2 , photo: "https://avatars.mds.yandex.net/i?id=cc5999fc85ba867209b4b58016eee4cd-5220968-images-thumbs&n=13"} ,
      {name:'Dustin' , id: 3 , photo: "https://avatars.mds.yandex.net/i?id=b61ae309ac765194b3db6cc1f508a868-4901575-images-thumbs&n=13"} ,
      {name:'Islam' , id: 4 , photo: "https://avatars.mds.yandex.net/i?id=b61ae309ac765194b3db6cc1f508a868-4901575-images-thumbs&n=13"} ,
      {name:'Beneil' , id: 5 , photo3: "https://avatars.mds.yandex.net/i?id=b61ae309ac765194b3db6cc1f508a868-4901575-images-thumbs&n=13"} , 
    ] , 
    messagesData: [
      {message: 'hello brother' , id: 1 } ,
      {message: 'wazzap' ,id:2} ,
      {message: 'Chicken - dinner' ,id: 3} ,
      {message: 'qwerty' ,id:4} ,
      {message: 'i love hentai' , id:5} , 
    ] 
    , newPostChange : "Введи сообщение ... "  
};


const dialogReducer = (state = initialState , action) => {
  switch(action.type) {

  
  case ADDPOST : 
    let newPost = {
      id: 6 , 
      message: state.newPostChange , 
      likeCount: 12000
    }; 
    return { 
      ...state , 
      messagesData : [...state.messagesData , newPost] , 
      newPostChange : ""
      
    };

  case UPDATEONCHANGEPOST : 
    return {...state , 
      newPostChange : action.newText
    };

  default : 
      return state ;
}
  

}
export const addPostActionCreator = () => ({type: ADDPOST})
  
export const updateOnChangePostActionCreator = (text) => ({ type: UPDATEONCHANGEPOST , newText: text  })
export default dialogReducer;