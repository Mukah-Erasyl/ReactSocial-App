import React from 'react';
import s from '../login.module.css';

const LoginForm  = (props) => {
    return (
            <form>
            <div>
                <input placeholder='Login' />
             </div>
             <div>
             <input placeholder='Password' />
             </div>
             <div>
             <input type={'checkbox'} /> remember me 
             </div>
             <div>
                <button>Login</button>
             </div>
             </form>
    )
    }


    export default LoginForm ; 