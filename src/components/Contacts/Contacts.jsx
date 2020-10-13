import React from 'react';
import styles from './Contacts.module.css'
import Title from "../Title/Title";
import Button from "../Button/Button";
import Fade from 'react-reveal/Fade';
import {useFormik} from "formik";
import  axios from "axios";
import CustomizedSnackbars from "../Utils/Alert";



const Contacts = (props) => {


    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validate: (values) => {
            const errors = {};
            if (!values.email) {
                errors.email = 'Required field';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.name) {
                errors.name = 'Required field';
            }
            if (!values.message) {
                errors.message = 'Required field';
            }
            return errors;
        },
        onSubmit: async (values, {resetForm}) => {
           await axios.post('https://smtp-server-for.herokuapp.com/sendMessage', {
                name: values.name,
                email: values.email,
                message: values.message
            })
                .then((res) => {
                    if (res.status === 200) {
                        props.setLoaded(true)
                    }
                })
            resetForm()
        }
    })


    return (
        <div id={"contacts"} className={styles.contacts}>
            <div className={styles.container}>
                <Fade right> <Title name={props.name}/></Fade>
                <Fade left>
                    <form onSubmit={formik.handleSubmit}>

                        <input type="text" placeholder={'Your name'}
                               name={'name'}
                               {...formik.getFieldProps('name')
                               }
                        />
                        {formik.errors.name ? <div>{formik.errors.name}</div> : null}


                        <input type="email"
                               placeholder={'Your email address'}
                               name={'email'}
                               {...formik.getFieldProps('email')}
                        />
                        {formik.errors.email ? <div>{formik.errors.email}</div> : null}

                        <textarea cols="30" rows="10"
                                  placeholder={"Enter a message"}
                                  name={'message'}
                                  {...formik.getFieldProps('message')}
                        >
                                 </textarea>
                        {formik.errors.message ? <div>{formik.errors.message}</div> : null}
                        <Button type={props.buttonType} name={props.buttonName}></Button>
                    </form>
                </Fade>
            </div>
        </div>
    );
}

export default Contacts;
