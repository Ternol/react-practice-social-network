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
        term: '',
        friend: ''
    }
    const router = useHistory()
    const onSubmit = (values: typeof initialValues) => {

        if (!values.term && !values.friend) {
            router.push('?')
            dispatch(getUsers(1,100))
            return
        }
        router.push(`?term=${values.term}&friend=${values.friend}`)
        dispatch(getUsers(1,20,values.term,values.friend))
    }
    return (
        <div className={s.searchFormWrapper}>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                <Form>
                    <div className={s.searchFormElements}>
                        <div className={s.columnWrapper}>
                            <label>Find users</label>
                            <Field className={s.searchFormInput} type="text"
                                    name='term'/>
                        </div>
                        <div className={s.columnWrapper}>
                            <label>Filter</label>
                            <Field className={s.searchFormSelect} name={'friend'} as={'select'}>
                                <option value={''}>All</option>
                                <option value={'true'}>Only followed</option>
                                <option value={'false'}>Only unfollowed</option>
                            </Field>
                        </div>
                        <div className={s.searchFormButton}><MyButton type='submit'>Search</MyButton></div>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default UsersSearchForm