import {
    ADD_TARGET,
    REMOVE_TARGET,
    EDIT_TARGET,
} from '../constants';

export const addTarget = (target) => {
    return {
        type: ADD_TARGET,
        payload: { target }
    }
};

export const removeTarget = (id) => {
    return {
        type: REMOVE_TARGET,
        payload: { id }
    }
};

export const editTarget = (target) => {
    console.log(target)
    return {
        type: EDIT_TARGET,
        payload: { target }
    }
};