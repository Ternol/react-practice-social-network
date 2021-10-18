import React, {FC} from 'react';
import * as Yup from "yup";
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {addMessage} from "../../redux/reducers/dialogsReducer";

const NewMessageForm:FC = () => {
    const dispatch = useDispatch()

    const initialValues = {
        textarea: ''
    }
    const onSubmit = (values: typeof initialValues, onSubmitProps: any) => {
        dispatch(addMessage(values.textarea))
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
            <label htmlFor="textarea">New message</label>
            <textarea name="textarea"
                      id="textarea"
                      value={formik.values.textarea}
                      onChange={formik.handleChange}
            />
            <button type={"submit"}>Send</button>
        </form>
    );
};

export default NewMessageForm;