import {INCREMENT_BIN_COUNTER, RESET_CART, DECREMENT_BIN_COUNTER} from './types'
import produce from "immer";

const binCounter = () => localStorage.getItem('binCounter') ? JSON.parse(localStorage.getItem('binCounter')) : 0;

const areInBin = () => localStorage.getItem('areInBin') ? JSON.parse(localStorage.getItem('areInBin')) : [];
const initialState = {
    binCounter: binCounter(),
    areInBin: areInBin()
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_BIN_COUNTER:
            return produce(state,draft=>{
                draft.binCounter += 1;
                console.log(draft.areInBin);
                draft.areInBin =[...draft.areInBin, action.payload];
                localStorage.setItem('areInBin',JSON.stringify(draft.areInBin));
                localStorage.setItem('binCounter', JSON.stringify(draft.binCounter));
            });
        case DECREMENT_BIN_COUNTER:
            return produce(state,draft=>{
                draft.binCounter -=1;
                localStorage.setItem('binCounter',JSON.stringify(draft.binCounter));
                const index =  draft.areInBin.findIndex((e=>e ===action.payload));
                draft.areInBin.splice(index,1);
                localStorage.setItem('areInBin',JSON.stringify(draft.areInBin))
            });
        case RESET_CART:
            return produce(state, draft=>{

                draft.binCounter = 0;
                draft.areInBin = []
                localStorage.removeItem('areInBin')
                localStorage.removeItem('binCounter')
            });
        default:
            return state
    }
}