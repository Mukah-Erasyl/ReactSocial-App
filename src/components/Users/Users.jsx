import React from "react";
import s from './Users.module.css';
import userPhoto from '../../accets/images/userPhoto.png';
import { NavLink } from "react-router-dom";
import { unfollow } from "../../Redux/users_reducer";
import axios from "axios";
import { usersAPIFollow } from "../../api/api";



let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let index = 1; index <= pagesCount; index++) {
        pages.push(index);

    }
    let a = pages[2];


    return (<div>
        
        <div className={s.pages}>

            {pages.map(p => {
            
                return <span key={p.id} className={props.currentPage === p && s.selectPage || s.page}
                    onClick={(e) => {
                        
                        props.onPageChanged(p);

                    }}>{p}</span>

            })}
        </div>

        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img className={s.avatar} src={u.photos.small != null ? u.photos.small : userPhoto} />
                    </NavLink>
                </div>
                <div>
                    {u.followed
                    
                        ?  <button disabled = {props.followingProgress.some(id => id === u.id)} onClick={() => {
                            props.deleteUsers(u.id);
                             
                        }
                        
                        }>Unfollow </button>: <button disabled = {props.followingProgress.some(id => id === u.id)} onClick={() => {
                        
                            props.postUsers(u.id);
                            
                            

                          
                        }

                        }>Follow </button>
                        }
                </div>

            </span>
            <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.cityCountry}</div>

                </span>
            </span>

        </div>)
        }

    </div>
    )


}

export default Users; 