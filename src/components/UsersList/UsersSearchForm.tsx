import React, {FC} from 'react';
import {Field, Form, Formik} from "formik";
import MyButton from "../../UI/MyButton/MyButton";
import s from './usersList.module.css'
import { useHistory } from 'react-router-dom';
import {useDispatch} from "react-redux";
import {getUsers} from "../../redux/reducers/usersReducer";

const UsersSearchForm: FC = () => {
    const dispatch = useDispatch()
    const initialValues = {
        term: ''
    }
    const router = useHistory()
    const onSubmit = (values: typeof initialValues) => {
        if (!values.term) {
            router.push('?')
            dispatch(getUsers(1,100))
            return
        }
        router.push(`?term=${values.term}`)
        dispatch(getUsers(1,20,values.term))
    }
    return (
        <div className={s.searchFormWrapper}>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                <Form>
                    <div className={s.searchFormElements}>
                        <div>
                            <Field className={s.searchFormInput} type="text"
                                    name='term'/></div>
                        <div><MyButton type='submit'>Search</MyButton></div>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default UsersSearchForm