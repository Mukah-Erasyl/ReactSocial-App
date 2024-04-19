
import React from 'react';
import { connect } from 'react-redux';
import { addMessageCreater, putStatusContent, updateOnChangeMessageCreator } from '../../../../Redux/profile_reducer';
import FileInfo from './FileInfo';

import s from "./FileInfo.module.css";


let mapStateToProps = (state) => {
    return {
        textBody :  state.profile.textBody ,
        profile : state.profile.profileS ,
        status : state.profile.status ,
        

        


    }

}

let mapDispatchToProps = (dispatch) => {
    
    return {
        
        updateOnChange :  (text) => {
        
        
            dispatch(
                updateOnChangeMessageCreator(text)
            );
        } , 

         callBack : () => {
        
           dispatch(addMessageCreater());
        
            
        } ,  
        putStatusContent : (status) => {
            dispatch(putStatusContent(status));
        }
        
        

    }

}



const FileInfoContainer = connect(mapStateToProps , mapDispatchToProps  ) (FileInfo);

export default FileInfoContainer;