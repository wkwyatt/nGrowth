import { EDIT_TARGET } from '../constants';

export const doNothingTarget = (target) => {
    return {
        type: EDIT_TARGET,
        payload: { target }
    }
};