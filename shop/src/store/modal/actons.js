import {CLOSE_MODAL, CLOSE_MODAL_REMOVE, OPEN_MODAL, OPEN_MODAL_REMOVE} from "./types";

export const openModal=()=>{
    return {
        type: OPEN_MODAL
    }
};
export const closeModal=()=>{
    return {
        type: CLOSE_MODAL
    }
}
export const openModalRemove=()=>{
    return {
        type: OPEN_MODAL_REMOVE
    }
};
export const closeModalRemove=()=>{
    return {
        type: CLOSE_MODAL_REMOVE
    }
}