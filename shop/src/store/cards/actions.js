import {
    FETCH_CARDS_SUCCESS,
    FETCH_CARDS_FAIL,
    FETCH_CARDS_REQUEST,
    ADD_TO_CART,
    REMOVE_FROM_CARD,
    ADD_TO_FAV, REMOVE_FROM_FAV
} from './types'

export const getCardsRequst = () => {
    return {
        type: FETCH_CARDS_REQUEST
    }
}
export const getCardsSuccess = (cards) => {
    return {
        type: FETCH_CARDS_SUCCESS,
        payload: cards
    }
};
export const getCardsFail = (err) => {
    return {
        type: FETCH_CARDS_FAIL,
        payload: err
    }
};
export const addToCartAC =(payload)=>{
    return{
        type: ADD_TO_CART,
        payload
    }
}
export const removeFromCartAC =(payload)=>{
    return {
        type: REMOVE_FROM_CARD,
        payload
    }
}
export const addToFavoriteAC=(payload)=>{
    return {
        type: ADD_TO_FAV,
        payload
    }
}
export const removeFromFav =(payload)=>{
    return {
        type: REMOVE_FROM_FAV,
        payload
    }
}
export const fetchCards = () => {
    return async function (dispatch) {
        dispatch(getCardsRequst());
        return await fetch('data/data.json').then(res => res.json()).then(r => {

            const favList = JSON.stringify(localStorage.getItem('areFavorite'));
            const binList = JSON.stringify(localStorage.getItem('areInBin'));
            r.forEach(el => {
                if (favList.includes(el.id)) {
                    return el.isFavorite = true
                }
                return el.isFavorite = false
            });
            r.forEach(el => {
                if (binList.includes(el.id)) {
                    return el.isInbin = true
                }
                return el.isInbin = false
            });

            dispatch(getCardsSuccess(r))
            return r
        })

    }

}
