import React, {FC} from 'react';
import {Field, Form, Formik} from "formik";
import MyButton from "../../UI/MyButton/MyButton";
import s from './usersList.module.css'

const UsersSearchForm: FC = () => {
    const initialValues = {
        term: ''
    }
    const onSubmit = (values: typeof initialValues) => {
        console.log(values)
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