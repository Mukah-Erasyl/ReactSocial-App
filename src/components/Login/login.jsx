import React from 'react';
import logAva from '../../accets/images/Login.png';
import s from './login.module.css';
import LoginReduxForm from './loginForm/loginForm.jsx';

const Login  = (props) => {
    return (
        <div>
            <div><img className={s.ava} src={logAva} /></div>
             <h1>Login</h1>
             <LoginReduxForm />
        </div>
    )
    }


    export default Login ; 