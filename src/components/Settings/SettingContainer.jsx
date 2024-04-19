
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { WithAuthRedirect } from '../../HOC/withAuthRedirect';
import { addPostActionCreator, updateOnChangePostActionCreator } from '../../Redux/dialog_reducer';
import { SetColorFetch } from '../../Redux/setting_reducer';




import Setting from './Setting';








let mapStateToProps = (state) => {

   
    return {
        colorFetching: state.setting.colorFetching , 
    }

}  

let mapDispatchToProps = (dispatch) => {
      return {
        updateOnChange : (colorFetching) => {
                   
            let action = SetColorFetch(colorFetching);
            dispatch(action); 
        } 

      }
}

const SettingContainer = compose( connect(mapStateToProps , mapDispatchToProps) , 
WithAuthRedirect
)(Setting);

export default SettingContainer; 