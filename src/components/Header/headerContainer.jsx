
import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
import {setAuthUserData , getUsersAuth} from '../../Redux/auth-reducer.js'
import { usersAPI2 } from '../../api/api';



class HeaderContainer extends React.Component {
    componentDidMount() {
        
        this.props.getUsersAuth();
    }
    render() {
    return (
        <Header {...this.props} />

        

    )
    }

}
const mapDispatchToProps = (state) => ({
    isAuth : state.auth.isAuth ,
    login : state.auth.login 

} )
export default connect(mapDispatchToProps , {setAuthUserData , getUsersAuth}
    )(HeaderContainer);

