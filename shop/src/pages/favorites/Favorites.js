import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import CardContainer from "../../components/cardContainer/CardContainer";
import styles from './Fvorites.module.scss'
import PropTypes from "prop-types";


const Favorites = ({data, areFavorite, rmFavorite, addFavorite, toggleModal, toggleModalRemove}) => {
    console.log(data);
    const current = data.filter(el => areFavorite.includes(el.id));
    console.log(current);
    return (
        <>
            <h1 className={styles.heading}>Favorites</h1>
            <CardContainer>
                {current.map(el => <Card rmFavorite={rmFavorite} addFavorite={addFavorite}
                                         key={el.id} card={el}>
                    {!el.isInbin ? <Button id={el.id} name={el.wine}  toggle={toggleModal} text='Buy' backgroundColor='red'/> :
                        <Button id={el.id} name={el.wine} toggle={toggleModalRemove} text='isInBin' backgroundColor='green'/>}

                </Card>)}
                {!current.length && <h1 className={styles.empty}>Your Favorites is empty</h1>}
            </CardContainer>
        </>
    )
};
Favorites.propTypes = {
    data: PropTypes.array,
    rmFavorite: PropTypes.func.isRequired,
    addFavorite: PropTypes.func.isRequired,
    toggleModal: PropTypes.func.isRequired
};
export default Favorites

