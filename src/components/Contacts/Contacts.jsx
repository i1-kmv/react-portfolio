import React from 'react';
import styles from './Contacts.module.css'
import Title from "../Title/Title";
import Button from "../Button/Button";
import Fade from 'react-reveal/Fade';
import {useFormik} from "formik";
import {AxiosInstance as axios} from "axios";

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
        onSubmit: (values, e) => {
            e.preventDefault()

            axios.post('http://localhost:3010/sendMessage')
                .then(() => {
                    alert('your message has been send')
                })
        },
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
                               name={'email'} {...formik.getFieldProps('email')}
                        />
                        {formik.errors.email ? <div>{formik.errors.email}</div> : null}

                        <textarea id="" cols="30" rows="10"
                                  placeholder={"Enter a message"}
                                  name={'message'}
                                  {...formik.getFieldProps('message')}>

                        </textarea>
                        {formik.errors.message ? <div>{formik.errors.message}</div> : null}
                        <Button type={'submit'} name={props.buttonName} />

                    </form>

                </Fade>


            </div>
        </div>
    );
}

export default Contacts;
