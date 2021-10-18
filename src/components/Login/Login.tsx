import React, {FC} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import './login.css'
import {loginUser} from "../../redux/reducers/authReducer";
import MyButton from "../../UI/MyButton/MyButton";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";


const Login:FC = () => {
    const {captchaUrl} = useTypedSelector(state => state.auth)
    const dispatch = useDispatch()

    const initialValues = {
        email: '',
        password: '',
        checkbox: false,
        captcha:''
    }

    // @ts-ignore
    const onSubmit = (values, {setStatus}) => {
        dispatch(loginUser(values.email, values.password, values.checkbox, values.captcha, setStatus))
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

                        <ErrorMessage name='email'>
                            {
                                (errorMessage => <div className='error'>{errorMessage}</div>)
                            }
                        </ErrorMessage>
                    </div>


                    <label htmlFor="password">Password</label>
                    <div className={'form-control'}>
                        <Field type="password"
                               name='password'
                               autoComplete={'on'}
                        />
                        <ErrorMessage name='password'>
                            {
                                (errorMessage => <div className='error'>{errorMessage}</div>)
                            }
                        </ErrorMessage>
                    </div>
                    {formikObj.status && <div className={'error'}>{formikObj.status}</div>}
                    {  captchaUrl && <div className={'captcha-block'}>
                        <img src={captchaUrl} alt="captcha"/>
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
                    <MyButton type='submit'>Enter</MyButton>


                </Form>
            </div>)}

        </Formik>
    );
};
export default Login;
