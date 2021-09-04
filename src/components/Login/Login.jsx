import React from 'react';
import {useFormik} from "formik";
import * as Yup from 'yup';
import './login.css'

const Login = () => {

    const initialValues = {
        email: '',
        password: '',
        checkbox: false
    }
    const onSubmit = values => {
        console.log(values)
    }
    const validationSchema = Yup.object({
        email: Yup.string().email().required('Обязательное поле'),
        password: Yup.string().required('Обязательное поле')
    })

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })
    return (
        <div className={'login'}>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="email">Email</label>
                <div className={'form-control'}>
                    <input type="email"
                           id='email'
                           name='email'
                           value={formik.values.email}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email ? (<div className={'error'}>{formik.errors.email}</div>) : null}
                </div>
                <label htmlFor="email">Пароль</label>
                <div className={'form-control'}>
                    <input type="password"
                           id='password'
                           name='password'
                           value={formik.values.password}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                    />
                    {formik.touched.password && formik.errors.password ? (<div className={'error'}>{formik.errors.password}</div>) : null}
                </div>
                <label htmlFor="checkbox">Запомнить меня</label>
                <div className={'form-control'}>
                    <input type="checkbox"
                           id='checkbox'
                           name='checkbox'
                           value={formik.values.checkbox}
                           onChange={formik.handleChange}
                    />
                </div>
                <button type='submit'>Войти</button>
            </form>
        </div>
    );
};

export default Login;