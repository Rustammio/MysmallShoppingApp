import style from './CardContainer.module.scss'
import PropTypes from "prop-types";

const CardContainer = ({children}) => {
    return (

        <div className={style.cardContainer}>
            {children}
        </div>
    )
};
CardContainer.propTypes = {
    children: PropTypes.node,


};


export default CardContainer