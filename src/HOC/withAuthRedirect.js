import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux/es/exports";

let mapStateToPropsForRedirect = (state) => {
    return {

        isAuth: state.auth.isAuth
    }

}

export const WithAuthRedirect = (Componet) => {

    class RedirectComponet extends React.Component {
        render() {
            if (!this.props.isAuth) return <Navigate to="/login/" />;
            return <Componet {...this.props} />

        }
    }

    let ConnecAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponet);
    return ConnecAuthRedirectComponent;
}