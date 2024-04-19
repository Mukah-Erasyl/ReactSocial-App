import { act } from "react-dom/test-utils";
import { usersAPI2 } from "../api/api";

let SET_USER_DATA = "SET-USER-DATA";
let SET_USER_AUTH = "SET_USER_AUTH";


let initialState = {

     isFetching : false , 
     id: null,
      email: null,
      login: null ,
      isAuth : false,
    
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      
      return {
        ...state,
        ...action.data , 
        isAuth : true 
      }
   
    case SET_USER_AUTH:
      
      return {
        ...state, 
        isAuth : action.isAuth 
      }
   


    default: return state;
  }



}
export const setAuthUserData = (id , email, login ) => ({
  type: SET_USER_DATA,
  data : {id , email, login}
})
export const setAuthUser = (isAuth) => ({
  type: SET_USER_AUTH,
  isAuth
})


export const getUsersAuth = () => {
  return (dispatch) => {
    usersAPI2.getUsers().then(result => {
      if(result.data.resultCode ===  0) {
          let {id , email , login } = result.data.data ; 
          dispatch(setAuthUserData(id , email , login));
      }
      
      
  })

  }
}
export const setUsersAuth = (isAuth) => {
  return (dispatch) => {
    dispatch(setAuthUserData(isAuth));

  }
}


export default authReducer;