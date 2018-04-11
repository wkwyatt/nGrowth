import { generateId } from '../helpers/generators';
import {
    ADD_TARGET,
    REMOVE_TARGET,
} from '../constants';

const INITIAL_STATE = {
    // Status (e.g., researching, pending approval, approved, declined)
    targets: [
        { id: generateId(), companyName: 'Apple', status: 'pending', logo: "//logo.clearbit.com/apple.com" },
        { id: generateId(), companyName: 'Insiten', status: 'pending', logo: "//logo.clearbit.com/insiten.com" },
        { id: generateId(), companyName: 'Facebook', status: 'pending', logo: "//logo.clearbit.com/facebook.com" },
        { id: generateId(), companyName: 'Bitcoin', status: 'pending', logo: "//logo.clearbit.com/bitcoin.com" },
        { id: generateId(), companyName: 'Meetup', status: 'pending', logo: "//logo.clearbit.com/meetup.com" },
        { id: generateId(), companyName: 'Guitar Center', status: 'pending', logo: "//logo.clearbit.com/guitarcenter.com" },
        { id: generateId(), companyName: 'Boo Digital', status: 'pending', logo: "//logo.clearbit.com/boodigital.com" },
        { id: generateId(), companyName: 'Make & Build', status: 'pending', logo: "//logo.clearbit.com/instagram.com" },
    ]
};

export default function targetList(state = INITIAL_STATE, action) {
    var index;
    var newState;
    switch (action.type) {
        case ADD_TARGET:
            console.log('ADD_TARGET Action');
            return { ...state, targets: [ ...state.targets, { id: generateId(), ...action.payload.target} ] };
        // case DECLINE_TARGET:
        //     return state.targets.map((e) => {
        //         if (e.id == action.payload.id) {
        //             return {
        //                 ...e,
        //                 status: 'declined'
        //             }
        //         }
        //         return e;
        //     });
        case REMOVE_TARGET:
            return { ...state, targets: state.targets.filter((e) => e.id !== action.payload.id) };
        default:
            return state;
    }
}