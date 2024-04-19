import { usersAPI, usersAPIFollow } from "../api/api";

let FOLLOW = "FOLLOW";
let UNFOLLOW = "UNFOLLOW";
let SETUSERS = "SETUSERS";
let SETCURRENTPAGE = "SET-CURRENT-PAGE";
let SET_USERS_TOTAL_COUNT = "SET-USERS-TOTAL-COUNT";
let TOOGLE_ISFETCHING = "TOOGLE_ISFETCHING";
let TOOGLE_IS_FOLLOWING_PROGRESS = "TOOGLE_IS_FOLLOWING_PROGRESS";


let initialState = {
  users: [


  ],
  isFetching: false,
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  followingProgress: [],

};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true }


          }
          return u;

        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false }


          }
          return u;

        })
      }
    case SETUSERS:
      return {
        ...state,
        users: action.users
      }
    case SETCURRENTPAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }
    case SET_USERS_TOTAL_COUNT:
      return {
        ...state,
        totalUsersCount: action.count
      }
    case TOOGLE_ISFETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }
    case TOOGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingProgress: action.isFetching
          ? [...state.followingProgress, action.userId]
          : state.followingProgress.filter(id => id != action.userId)
      }



    default: return state;
  }



}
export const follow = (userId) => ({
  type: FOLLOW,
  userId
})
export const unfollow = (userId) => ({ type: UNFOLLOW, userId })
export const SetUsers = (users) => ({ type: SETUSERS, users })
export const SetCurrentPage = (currentPage) => ({ type: SETCURRENTPAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_USERS_TOTAL_COUNT, count: totalUsersCount })
export const toogleIsFetching = (isFetching) => ({ type: TOOGLE_ISFETCHING, isFetching })
export const toogleIsFollowProgress = (isFetching, userId) => ({ type: TOOGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toogleIsFetching(true));
    usersAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(toogleIsFetching(false));
      dispatch(SetUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    })

  }
}
export const postUsers = (userId) => {
  return (dispatch) => {
    dispatch(toogleIsFollowProgress(true, userId));
    usersAPIFollow.postUsers(userId).then(result => {
      if (result.data.resultCode == 0) {
        dispatch(follow(userId));


      }
      dispatch(toogleIsFollowProgress(false, userId));
    })

  }
}
export const deleteUsers = (userId) => {
  return (dispatch) => {
    dispatch(toogleIsFollowProgress(true, userId));
    usersAPIFollow.deleteUsers(userId).then(result => {
      if (result.data.resultCode === 0) {
        dispatch(unfollow(userId));

      }
      dispatch(toogleIsFollowProgress(false, userId));
    })

  }
}
export default usersReducer;