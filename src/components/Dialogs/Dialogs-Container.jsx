
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { WithAuthRedirect } from '../../HOC/withAuthRedirect';
import { addPostActionCreator, updateOnChangePostActionCreator } from '../../Redux/dialog_reducer';




import Dialogs from './Dialogs';








let mapStateToProps = (state) => {

   
    return {
    dialog: state.dialog ,
    newPostChange: state.dialog.newPostChange , 
    }

}  

let mapDispatchToProps = (dispatch) => {
      return {
        updateOnChange : (text) => {
                   
            let action = updateOnChangePostActionCreator(text);
            dispatch(action); 
        } , 
        addPost: () => {
                   
            dispatch(addPostActionCreator());
        
            
        }

      }
}

const DialogsContainer = compose( connect(mapStateToProps , mapDispatchToProps) , 
WithAuthRedirect
)(Dialogs);

export default DialogsContainer; 