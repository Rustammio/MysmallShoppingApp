import React from "react";
import styles from './Button.module.scss'
import PropTypes from 'prop-types'
const Button =({id, name,toggle, text ,backgroundColor}) =>{
    return(
        <div className={styles.btn}>
            <button style={{
                backgroundColor: backgroundColor
            }} onClick={()=>toggle(id,name)} className={styles.btnItem}>{text}</button>
        </div>
    )
};

Button.propTypes= {
    toggle: PropTypes.func,
    text: PropTypes.string,
    backgroundColor: PropTypes.string

};
Button.defaultProps ={
    backgroundColor: 'black'
};
export default Button