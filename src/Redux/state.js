import dialogReducer from "./dialog_reducer";
import profileReducer from "./profile_reducer";

let ADDPOST = "ADD-POST";
let UPDATEONCHANGEPOST = "UPDATE-ON-CHANGE-POST";
let UPDATEONCHANGEMESSAGE = "UPDATE-ON-CHANGE-MESSAGE";
let ADDMESSAGE = "ADD-MESSAGE";
let store = {
       rerenderEntireTree(){
  console.log("bitchAss");
} ,

      _state: {
      dialog: {
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
          , newPostChange : "Hello bitchAss"  
      }
     
     
     ,
     profile:{
      PostAtr: [
        {id:1 , message: "то чувство когда кто то повторяет твой комент но получает больше лайков" ,  likeCount: "2"},
        {id:2 , message: "Аруак" ,  likeCount: "2K"},
        {id:1 , message: "то чувство когда кто то повторяет твой комент но получает больше лайков" ,  likeCount: "126"}
      
      ] ,
      textBody: "asshole"
    } ,
    

      


  } ,


  dispatch(action) {
    this._state.dialog = dialogReducer(this._state.dialog  , action);
    this._state.profile = profileReducer(this._state.profile,action);
    this.rerenderEntireTree(this._state);
   
     
  } ,

subscribe(observer){
    this.rerenderEntireTree = observer;

  } ,

  getState() {
    return this._state;
  }
 
}


  



export default store ;