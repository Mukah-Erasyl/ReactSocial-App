
import React from 'react';
import Preloader from '../../../common/Preloader';
import s from "./FileInfo.module.css";


class ProfileStatus extends React.Component {
    state = {
        editMode : false ,
        status : this.props.status
        
    } ; 
   
    toogleEditMode = () => {
        if (!this.state.editMode) {
            this.setState({
                editMode: true
            })
        }

        else {
            this.setState({
                editMode: false

            }) ;
            this.props.putStatusContent(this.state.status) ;
        }

        

    }

    onStatusChange = (e) => {
        this.setState({
            status : e.currentTarget.value
        });
        

    }
    componentDidUpdate(prevProps , prevState) {
        if(prevProps.status !== this.props.status) {
        this.setState({
            status : this.props.status
        })
    }
    }

    render() {
    
    return (
        <div className={s.statusInfo}>
            {!this.state.editMode?<div><span onDoubleClick={this.toogleEditMode}>{this.props.status || "------"}
            </span></div>
            :<div><span><input onChange={this.onStatusChange} autoFocus = {true} onBlur={this.toogleEditMode} 
            value={this.state.status}  /></span></div>}
        </div> 
   
    )
    }
}


export default ProfileStatus;