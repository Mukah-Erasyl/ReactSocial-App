
import React from 'react';
import { connect } from 'react-redux';
import Content from './content';
import axios from 'axios';
import { getUsersContent , getStatusContent , putStatusContent , getStatus } from '../../Redux/profile_reducer';
import {
    Navigate,
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import { usersAPIContent } from '../../api/api';
import { WithAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

class ContentContainer extends React.Component {
    componentDidMount() {
        
        let profileId = this.props.router.params.profileId;
        if(!profileId) {
            profileId = 24331; 
        }
        
        this.props.getUsersContent(profileId);
        this.props.getStatus(profileId);

        
       
        

    }
    
    
    render() {
        

        return <Content {...this.props} state = {this.props.state} />
    }   

    
        
    }
  


    let mapStateToProps = (state) => {
        return {
        profile: state.profile.profileS ,
        status : state.profile.status
        
        
        }

    }
    
    

export default compose(
    connect(mapStateToProps , {getUsersContent ,getStatus ,
        putStatusContent

    }) , withRouter,WithAuthRedirect
)(ContentContainer);