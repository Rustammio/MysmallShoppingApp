import React from "react";
import styles from "./Modal.module.scss";
import Button from "../Button/Button";
import PropTypes from "prop-types";
const Modal = ({cardToAdd,wineToAdd, toCart, title, body, question,toggle})=>{
    const hendlerCartAddition=()=>{
        toCart(cardToAdd);
        toggle()
    };
    return (
        <>
            <div onClick={toggle} className={styles.modalBackdrop}></div>
            <div className={styles.modal}>
                <div className={styles.modalTitle}>
                    <h4 className={styles.modalTitleText}>{title}</h4>
                    <h1
                        onClick={toggle}
                        className={styles.modalTitleClose}
                    >
                        x
                    </h1>
                </div>
                <div className={styles.modalBody}>
                    <div className={styles.modalBodyText}>
                        <h5 className={styles.modalBodyTextMain}>{body}</h5>
                        <p>
                            {question}{wineToAdd}
                        </p>
                    </div>
                    <div className={styles.modalBodyBtn}>
                        <Button toggle={toggle} text={'Cancel'}backgroundColor={'black'}/>
                        <Button toggle={()=>hendlerCartAddition()} text={title} backgroundColor={'blue'}/>
                    </div>
                </div>
            </div>
        </>
    );
};


Modal.propTypes={
    title:PropTypes.string,
    body: PropTypes.string,
    question:PropTypes.string,
    toggle:PropTypes.func.isRequired,
    toCart: PropTypes.func.isRequired
};
Modal.defaultProps={
    title:'Add to cart',
    body: 'Are you sure you want to add to  cart the product you selected?',
    question: '',
    action: ''
};


export default Modal;
