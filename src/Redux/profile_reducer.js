import { usersAPIContent } from "../api/api";
import { addPostActionCreator } from "./dialog_reducer";

let UPDATEONCHANGEMESSAGE = "UPDATE-ON-CHANGE-MESSAGE";
let ADDMESSAGE = "ADD-MESSAGE";
let SET_USER_PROFILE = "SET-USER-PROFILE" ; 
let SET_STATUS = "SET_STATUS" ; 


let initialState = {
  PostAtr: [
    {id:1 , message: "то чувство когда кто то повторяет твой комент но получает больше лайков" ,  likeCount: "2"},
    {id:2 , message: "Аруак" ,  likeCount: "2K"},
    {id:3 , message: "то чувство когда кто то повторяет твой комент но получает больше лайков" ,  likeCount: "126"}
  
  ] ,
  textBody: "Введи текст поста " , 
  profileS : null , 
  status : "Hello i'm Era user"
};

const profileReducer = (state = initialState , action) => {
  switch(action.type) {
    case UPDATEONCHANGEMESSAGE : 
      return {...state  , 
        textBody : action.body
      };

        
        
      
       
  
      case ADDMESSAGE : 
        let newMes = {
          id: 6 , 
          message:state.textBody , 
          likeCount: 12000
        }; 
        return {...state , 
        PostAtr :  [...state.PostAtr , newMes ] , 
        textBody : ""          
        };

      case SET_USER_PROFILE : 
        return {...state , profileS : action.profileS}


      case SET_STATUS : 
        return {...state , status : action.status}      
        
        
       
  
      
      default : return state;
  }
     
    

}
export const  updateOnChangeMessageCreator  = (text) => ({
  type: "UPDATE-ON-CHANGE-MESSAGE" ,
  body : text
})
export const SetUserProfile = (profileS) => ({type : SET_USER_PROFILE , profileS})
export const SetUsersStatus = (status) => ({type : SET_STATUS , status})
export const addMessageCreater = () => ({type: "ADD-MESSAGE"})

export const getUsersContent = (userId) => {
  return (dispatch) => {
    usersAPIContent.getUsers(userId).then(result => {
               
      dispatch(SetUserProfile(result.data));
  })

  }
}
export const getStatus = (userId) => {
 
  return (dispatch) => {
   
    usersAPIContent.getStatusContent(userId).then(responce => {

        
      dispatch(SetUsersStatus(responce.data));

  })

  }
}
export const putStatusContent = (status) => {
  return (dispatch) => {
    usersAPIContent.putStatusContent(status).then(result => {
      if(result.data.resultCode === 0) {
               
      dispatch(SetUsersStatus(status));
      }
  })

  }
}



export default profileReducer ;