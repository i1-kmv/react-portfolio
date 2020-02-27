import React from 'react';
import styles from './Contacts.module.css'

const Contacts = () => {
    return (
        <div className={styles.contacts}>
          <div className={styles.container}>
              <div className={styles.title}>
                  <p>Контакты</p>
              </div>
                <form>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea name="text" id="" cols="30" rows="10"></textarea>
                </form>
              <div className={styles.button}>
                  <p>Нанять меня</p>
              </div>
          </div>
        </div>
    );
}

export default Contacts;
