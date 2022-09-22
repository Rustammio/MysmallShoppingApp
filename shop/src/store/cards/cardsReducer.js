import {
    FETCH_CARDS_SUCCESS,
    FETCH_CARDS_FAIL,
    FETCH_CARDS_REQUEST,
    ADD_TO_CART,
    REMOVE_FROM_CARD,
    ADD_TO_FAV, REMOVE_FROM_FAV
} from './types'
import produce from 'immer'

const initialState = {
    loading: false,
    data: [],
    error: ''
}

export const cardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CARDS_REQUEST:
            return produce(state, draft => {
                draft.loading = true
            });
        case FETCH_CARDS_SUCCESS:
            return produce(state, draft => {
                draft.loading = false;
                draft.data = action.payload
            })
        case FETCH_CARDS_FAIL:
            return produce(state, draft => {
                draft.loading = false;
                draft.error = action.payload
            })
        case ADD_TO_CART:
            return produce(state, draft => {
                const id = action.payload
                const obj = draft.data.find(e => e.id === id);
                const index = draft.data.indexOf(obj);
                draft.data[index].isInbin = true;

            })
        case REMOVE_FROM_CARD :
            return produce(state, draft => {
                const id = action.payload;
                const obj = draft.data.find(e => e.id === id);
                const i = draft.data.indexOf(obj);
                draft.data[i].isInbin = false;

            })
        case ADD_TO_FAV:
            return produce(state, draft => {
                const id = action.payload
                // eslint-disable-next-line
                const obj = draft.data.find(e => e.id === id);
                const index = draft.data.indexOf(obj);
                draft.data[index].isFavorite = true;

            })
        case REMOVE_FROM_FAV:
            return produce(state, draft => {
                const id = action.payload
                // eslint-disable-next-line
                const obj = draft.data.find(e => e.id === id);
                const i = draft.data.indexOf(obj);
                draft.data[i].isFavorite = false;

            })
        default:
            return state
    }

};
