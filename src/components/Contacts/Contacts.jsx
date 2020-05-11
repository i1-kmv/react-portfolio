import React from 'react';
import styles from './Contacts.module.css'
import Title from "../Title/Title";
import Button from "../Button/Button";
import Fade from 'react-reveal/Fade';

const Contacts = (props) => {
    return (
        <div id={"contacts"}   className={styles.contacts}>
            <div className={styles.container}>
                <Title name={props.name}/>



                <form>
                    <Fade right>
                        <input type="text" placeholder={'Your name'}/>
                    </Fade>
                    <Fade left>
                        <input type="email" placeholder={'Your email address'}/>
                    </Fade>
                    <Fade right>
                        <textarea name="text" id="" cols="30" rows="10" placeholder={"Enter a message"} ></textarea>
                    </Fade>
                </form>

                    <Button name={props.buttonName}/>


            </div>
        </div>
    );
}

export default Contacts;
