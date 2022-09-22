import React from "react";
import styles from './Card.module.scss'
import PropTypes, {node} from "prop-types";
const Card = ({addFavorite,rmFavorite,card, children})=>{
    const add=(id)=>{

        if (card.isFavorite) {
            rmFavorite(id)
        } else {
            addFavorite(id)
        }
    };
    return(
        <div  className={styles.card}>

            {!card.isFavorite?<img onClick={()=>add(card.id)} className={styles.cardFav} src='./img/favoritesymbol.svg' alt=""/>:
                <img onClick={()=>add(card.id)} className={styles.cardFav} src='./img/star_favorite_14013.png' alt=""/>}
            <img className={styles.cardImg} src={card.image} alt=""/>
            <div className={styles.cardInfo}>
                <h3 className={styles.cardInfoName}>{card.wine}</h3>
                <h5 className={styles.cardInfoPlace}>{card.winery}</h5>
                <span className={styles.cardInfoLocation}>{card.location}</span>
                <div className={styles.cardInfoRating}>
                    <div className={styles.cardInfoRatingAverage}>{card.rating.average}</div>
                    /
                    <div className={styles.cardInfoRatingReviews}>{card.rating.reviews}</div>
                </div>
                <div className={styles.cardInfoArticul}>Articul: {card.id}</div>
            </div>
            {children}
        </div>
    )
};

Card.propTypes ={
    card: PropTypes.exact({
        winery: PropTypes.string,
        wine: PropTypes.string,
        rating: PropTypes.shape({
            average: PropTypes.string,
            reviews :PropTypes.string
        }),
        location: PropTypes.string,
        image:PropTypes.string,
        id:PropTypes.number.isRequired,
        isFavorite:PropTypes.bool,
        isInbin:PropTypes.bool
    }),
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(node)
    ]),
    addFavorite: PropTypes.func,
    rmFavorite: PropTypes.func
};
export default Card