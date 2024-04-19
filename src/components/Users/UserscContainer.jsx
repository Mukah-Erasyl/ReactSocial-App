import React from 'react';
import { connect } from 'react-redux';
import { follow, SetCurrentPage,  unfollow , postUsers  , toogleIsFollowProgress ,  getUsers , deleteUsers} from '../../Redux/users_reducer';

import Users from './Users';
import Preloader from '../common/Preloader';

import {usersAPI} from '../../api/api.js';
import { compose } from 'redux';
import { WithAuthRedirect } from '../../HOC/withAuthRedirect';



class UsersContainer extends React.Component {

    componentDidMount(props) { 
        this.props.getUsers(this.props.currentPage , this.props.pageSize);
        

    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber , this.props.pageSize);

    }






    render() {
 
        return <>
            {this.props.isFetching ? 
            <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}

                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                toogleIsFollowProgress = {this.props.toogleIsFollowProgress}
                followingProgress = {this.props.followingProgress} 
                postUsers = {this.props.postUsers}
                deleteUsers = {this.props.deleteUsers}
                
                
            />
        </>
    }
}



let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching , 
        followingProgress : state.usersPage.followingProgress              

    }

}

export default
compose(
    connect(mapStateToProps,{ 
        follow,unfollow,
        SetCurrentPage , 
        toogleIsFollowProgress , getUsers , postUsers ,
        deleteUsers
        }) ,WithAuthRedirect
        
)(UsersContainer);