import React, {FC} from 'react';
import {Field, Form, Formik} from "formik";
import MyButton from "../../UI/MyButton/MyButton";
import s from './usersList.module.css'
import {useDispatch} from "react-redux";
import {FilterType, setFilterAndRequestUsers} from "../../redux/reducers/usersReducer";
import {useTypedSelector} from "../../hooks/useTypedSelector";



const UsersSearchForm: FC = () => {

    const {pageSize,filter} = useTypedSelector(state => state.usersPage)

    type FriendFormType = 'null' | 'true' | 'false'

    type FormValuesType = {
        term: string,
        friend: FriendFormType
    }
    const dispatch = useDispatch()



    const onSubmit = (values: FormValuesType) => {
        const filter: FilterType = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend === 'true'
        }

        dispatch(setFilterAndRequestUsers(1, pageSize, filter))
    }
    return (
        <div className={s.searchFormWrapper}>
            <Formik
                enableReinitialize
                initialValues={{term: filter.term, friend: String(filter.friend) as FriendFormType}}
                    onSubmit={onSubmit}>
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