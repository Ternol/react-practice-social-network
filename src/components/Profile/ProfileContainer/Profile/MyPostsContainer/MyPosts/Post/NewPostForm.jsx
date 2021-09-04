import React from 'react';
import {useFormik} from 'formik'
import * as Yup from 'yup'
const NewPostForm = (props) => {
    const initialValues = {
        textarea: ''
    }
    const onSubmit = (values, onSubmitProps) => {
        props.addPost(values.textarea);
        onSubmitProps.resetForm()
    }
    const validationSchema = Yup.object({
        textarea: Yup.string().max(1500)
    })
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })



    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="textarea">Новый пост</label>
            <textarea name="textarea"
                      id="textarea"
                      value={formik.values.textarea}
                      onChange={formik.handleChange}
            />
            <button type={"submit"}>Опубликовать</button>
        </form>
    );
};

export default NewPostForm;