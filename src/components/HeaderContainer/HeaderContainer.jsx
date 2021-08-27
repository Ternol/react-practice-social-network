import React, {useEffect} from 'react';
import Header from "./Header/Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/reducers/authReducer";
import axios from "axios";



const HeaderContainer = (props) => {
    useEffect(()=> {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',{
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    const {id,email,login} = response.data.data
                    props.setAuthUserData(id,email,login)
                }
            })
    },[])

    return (
        <Header {...props}/>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})


export default connect(mapStateToProps,{setAuthUserData})(HeaderContainer)
