import React from 'react';
import styles from './Contacts.module.css'
import Title from "../Title/Title";
import Button from "../Button/Button";

const Contacts = (props) => {
    return (
        <div className={styles.contacts}>
          <div className={styles.container}>
             <Title name={props.name}/>
                <form>
                    <input type="text" placeholder={'Your name'}/>
                    <input type="email" placeholder={'Your email address'}/>
                    <textarea name="text" id="" cols="30" rows="10"></textarea>
                </form>
              <Button name={props.buttonName}/>
          </div>
        </div>
    );
}

export default Contacts;
