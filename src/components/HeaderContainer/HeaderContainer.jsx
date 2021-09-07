import React from 'react';
import Header from "./Header/Header";
import {connect} from "react-redux";
import {logoutUser} from "../../redux/reducers/authReducer";

const HeaderContainer = (props) => {
    return (
        <Header {...props}/>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})


export default connect(mapStateToProps,{logoutUser})(HeaderContainer)
