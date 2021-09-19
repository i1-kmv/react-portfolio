import React, {useState} from "react";
import style from './Modal.module.css'


export const Modal = (props) => {

   const [modalMode, setModalMode] = useState(true)

    return (
        modalMode && <div className={style.modal}><img src={props.image} alt=""/></div>
    )
}