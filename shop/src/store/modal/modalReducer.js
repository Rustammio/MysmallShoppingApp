import {CLOSE_MODAL, CLOSE_MODAL_REMOVE, OPEN_MODAL, OPEN_MODAL_REMOVE} from "./types";
import produce from "immer";

const initialState ={
    isOpen: false,
    isOpenRemove:false
}

export const modalReducer=(state= initialState, action)=>{
    switch(action.type){
        case OPEN_MODAL:
            return produce(state,draft=>{
                draft.isOpen = true
            })
        case CLOSE_MODAL:
            return produce(state,draft=>{
                draft.isOpen = false
            })
        case OPEN_MODAL_REMOVE:
            return produce(state,draft=>{
                draft.isOpenRemove = true
            })
        case CLOSE_MODAL_REMOVE:
            return produce(state,draft=>{
                draft.isOpenRemove = false
            })
        default:
            return state
    }
}