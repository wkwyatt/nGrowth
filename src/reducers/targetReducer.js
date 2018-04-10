import {
    EDIT_TARGET,
} from '../constants';

const INITIAL_STATE = {
    selectedTarget: {
        companyName: 'X',
    },
    newTarget: {
        companyName: '',
    }
};

export default function targetList(state = INITIAL_STATE, action) {
    switch (action.type) {
        case EDIT_TARGET:
            console.log('EDIT_TARGET Action');
            return state;
        default:
            return state;
    }
}