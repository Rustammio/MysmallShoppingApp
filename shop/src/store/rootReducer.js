import {combineReducers} from "redux";
import {cardsReducer} from "./cards/cardsReducer";
import {modalReducer} from "./modal/modalReducer";
import {cartReducer} from "./cart/cartReducer";

export const rootReducer = combineReducers({
    cardsReducer,
    modalReducer,
    cartReducer
})