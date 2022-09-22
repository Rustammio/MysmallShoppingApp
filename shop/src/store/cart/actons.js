import {INCREMENT_BIN_COUNTER, RESET_CART, DECREMENT_BIN_COUNTER} from './types'

export const incremrntBinCounter =(payload)=>{
    return{
        type:INCREMENT_BIN_COUNTER,
        payload
    }
};
export const decrementBinCounter=(payload)=>{
    return {
        type: DECREMENT_BIN_COUNTER,
        payload
    }
};
export const resetCart =()=>{
    return {
        type: RESET_CART
    }
};