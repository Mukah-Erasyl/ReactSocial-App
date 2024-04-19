let SETCOLORFETCH = "SET-COLOR-FETCH";
export let initialState = { 
    colorFetching : true
};


const settingReducer = (state = initialState , action) => {

   
    
  switch(action.type) {

  case SETCOLORFETCH : 
    return { 
        colorFetching : action.colorFetching
    };

  default : 
      return state ;
}
  

}

export const SetColorFetch = (colorFetching) => ({type : SETCOLORFETCH , colorFetching})

export default settingReducer;