import *as axios from "axios";

const instance = axios.create({
    withCredentials : true , 
    baseURL: 'https://social-network.samuraijs.com/api/1.0/' ,
    headers : {
        "API-KEY" : 'a0bb1a59-05f8-4b83-9866-ee34e4c530cf'

    }  
    
    
    

})
export const usersAPI = { 
    getUsers(currentPage = 1 , pageSize=10 , ) {

 return instance.get(`users?page=${currentPage}&count=${pageSize} ` 
 )
 .then(result => result.data) 
} , 
    postStatus(status) {

    return instance.put(`${status}` 
    )
    .then(result => result.data) 
   }
}



export const usersAPI2 = { 
    getUsers() {

 return instance.get(`auth/me`
 )

}
}



export const usersAPIContent = { 
    getUsers(profileId = '') {

 return instance.get(`profile/` + profileId
 )

}  , 
   getStatusContent(profileId) {
    return instance.get(`profile/status/${profileId}`)  
   } , 
   putStatusContent(status) {
    return instance.put(`profile/status/` , { status }) 
   }
}



export const usersAPIFollow = { 
    postUsers(profileId ) {

 return instance.post(`follow/` + profileId
 )

} , 
    deleteUsers(profileId ) {

        return instance.delete(`follow/` + profileId
        )
       
       }

}