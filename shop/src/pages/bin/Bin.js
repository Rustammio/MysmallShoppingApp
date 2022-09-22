import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import styles from './Bin.module.scss'
// import CardContainer from "../../components/cardContainer/CardContainer";
import PropTypes from "prop-types";
import FormContainer from "../../components/FormContainer/FormContainer";

const Bin = ({data, areInBin, rmFavorite, addFavorite, toggleModal, toggleModalRemove}) => {

    const current = data.filter(el => areInBin.includes(el.id));



    return (
        <>
            <h1 className={styles.heading}>Bin</h1>
            <div className={styles.binContainer}>

                {/*<CardContainer>*/}
                <div className={styles.cardContainer}>
                    {current.map(el => {
                        return (
                            <div key={el.id} className={styles.c}>
                                <h3 onClick={() => toggleModalRemove(el.id)} className={styles.x}>X</h3>
                                <Card rmFavorite={rmFavorite} addFavorite={addFavorite}
                                      key={el.id} card={el}>
                                    {!el.isInbin ?
                                        <Button id={el.id} toggle={toggleModal} name={el.wine} text='Buy'
                                                backgroundColor='red'/> :
                                        <Button id={el.id} name={el.wine} toggle={toggleModalRemove} text='isInBin'
                                                backgroundColor='green'/>}

                                </Card>

                            </div>
                        )
                    })}
                    {!current.length && <h1 className={styles.empty}>Your Cart is empty</h1>}
                </div>
                <FormContainer current={current}/>
                {/*</CardContainer>*/}


            </div>
        </>
    )
};
Bin.propTypes = {
    data: PropTypes.array,
    rmFavorite: PropTypes.func.isRequired,
    addFavorite: PropTypes.func.isRequired,
    toggleModal: PropTypes.func.isRequired
};
export default Bin