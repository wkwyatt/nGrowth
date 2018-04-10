import {
    ADD_TARGET,
    REMOVE_TARGET,
} from '../constants';

const INITIAL_STATE = {
    targets: [
        { id: 1, companyName: 'Apple' },
        { id: 2, companyName: 'Insiten' },
        { id: 3, companyName: 'Narwhal' },
        { id: 4, companyName: 'Ethereum' },
        { id: 5, companyName: 'Meetup' },
        { id: 6, companyName: 'Guitar Center' },
        { id: 7, companyName: 'Boo Digital' },
        { id: 8, companyName: 'Make & Build' },
    ]
};

export default function targetList(state = INITIAL_STATE, action) {
    var index;
    var newState;
    switch (action.type) {
        case ADD_TARGET:
            console.log('ADD_TARGET Action');
            return { ...state, targets: [ ...state.targets, action.payload.target ] };
        case REMOVE_TARGET:
            newState = state.targets.some((item, index) => {
                return (state.targets[index]['id'] === action.payload.id) ? !!(state.targets.splice(index, 1)) : false;
            });
            console.log('REMOVE_TARGET Action');
            return newState;
        default:
            return state;
    }
}