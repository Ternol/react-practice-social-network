import React from 'react';
import {useFormik} from 'formik'
import * as Yup from 'yup'
import MyButton from "../../../../../../../UI/MyButton/MyButton";


const NewPostForm = (props) => {
    const initialValues = {
        textarea: ''
    }
    const onSubmit = (values, onSubmitProps) => {
        props.addPost(values.textarea);
        onSubmitProps.resetForm();
        props.setVisible(false)
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
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="textarea" style={{padding: '2px 0 0 5px'}}>New Post</label>
                <textarea name="textarea"
                          id="textarea"
                          value={formik.values.textarea}
                          onChange={formik.handleChange}
                          style={{resize:"vertical", minWidth:'450px', maxHeight:'325px', margin: "10px 2px"}}
                />
                <MyButton type={"submit"}>Опубликовать</MyButton>
            </form>
        </div>
    );
};

export default NewPostForm;