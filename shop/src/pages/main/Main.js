import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import PropTypes from "prop-types";
import CardContainer from "../../components/cardContainer/CardContainer";
import styles from './Main.module.scss'


const Main = ({data, rmFavorite, addFavorite, toggleModal, toggleModalRemove})=>{

    return(
        <>
            <h1 className={styles.heading}>Main Page</h1>
            <CardContainer>
            {data.map(el => <Card rmFavorite={rmFavorite} addFavorite={addFavorite}
                                  key={el.id} card={el}>
                {!el.isInbin ? <Button id={el.id} name={el.wine}  toggle={toggleModal} text='Buy' backgroundColor='red'/> :
                    <Button id={el.id} name={el.wine} toggle={toggleModalRemove} text='isInBin' backgroundColor='green'/>}

            </Card>)}
            </CardContainer>
        </>
    )
};
Main.propTypes = {
    data: PropTypes.array,
    rmFavorite: PropTypes.func.isRequired,
    addFavorite: PropTypes.func.isRequired,
    toggleModal: PropTypes.func.isRequired
};
export default Main