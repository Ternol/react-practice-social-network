import React from 'react';
import * as Yup from "yup";
import {useFormik} from "formik";

const NewMessageForm = (props) => {
    const initialValues = {
        textarea: ''
    }
    const onSubmit = (values, onSubmitProps) => {
        props.addMessage(values.textarea);
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
            <label htmlFor="textarea">Новое сообщение</label>
            <textarea name="textarea"
                      id="textarea"
                      value={formik.values.textarea}
                      onChange={formik.handleChange}
            />
            <button type={"submit"}>Отправить</button>
        </form>
    );
};

export default NewMessageForm;