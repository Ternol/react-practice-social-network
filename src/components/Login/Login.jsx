import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import './login.css'
import {connect} from "react-redux";
import {loginUser} from "../../redux/reducers/authReducer";
import TextError from "../../UI/Formik/TextError";
import MyButton from "../../UI/MyButton/MyButton";


const Login = (props) => {
    const initialValues = {
        email: '',
        password: '',
        checkbox: false,
        captcha:''
    }
    const onSubmit = (values, {setStatus}) => {
        props.loginUser(values.email, values.password, values.checkbox, values.captcha, setStatus)
        console.log(setStatus)
    }
    const validationSchema = Yup.object({
        email: Yup.string().email().required('Обязательное поле'),
        password: Yup.string().required('Обязательное поле'),

    })


    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {formikObj => (
            <div className={'login'}>
                <Form>
                    <label htmlFor="email">Email</label>
                    <div className={'form-control'}>
                        <Field type="email"
                               name='email'
                        />
                        <ErrorMessage name='email' component={TextError}/>
                    </div>


                    <label htmlFor="password">Password</label>
                    <div className={'form-control'}>
                        <Field type="password"
                               name='password'
                               autoComplete={'on'}
                        />
                        <ErrorMessage name='password' component={TextError}/>
                    </div>
                    {formikObj.status && <div className={'error'}>{formikObj.status}</div>}
                    {  props.captchaUrl && <div className={'captcha-block'}>
                        <img src={props.captchaUrl} alt="captcha"/>
                        <label htmlFor="captcha">Enter symbols from captcha</label>
                        <div className="form-control">
                            <Field type="text"
                                   name='captcha'
                            />
                        </div>
                    </div>}


                    <div className='form-checkbox'><label htmlFor="checkbox">Remember me</label>
                        <div className={'form-control'}>
                            <Field type="checkbox"
                                   name='checkbox'
                            />
                        </div>
                    </div>
                    <MyButton type='submit'>Войти</MyButton>


                </Form>
            </div>)}

        </Formik>
    );
};
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
})

export default connect(mapStateToProps, {loginUser})(Login);