import React, {useEffect} from 'react';
import Header from "./Header/Header";
import {connect} from "react-redux";
import {authMe, logoutUser} from "../../redux/reducers/authReducer";

const HeaderContainer = (props) => {
    useEffect(()=> {
            props.authMe()
    },[props])

    return (
        <Header {...props}/>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})


export default connect(mapStateToProps,{authMe, logoutUser})(HeaderContainer)
