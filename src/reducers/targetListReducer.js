import { generateId } from '../helpers/generators';
import {
    ADD_TARGET,
    REMOVE_TARGET,
    EDIT_TARGET,
} from '../constants';

const INITIAL_STATE = {
    // Status (e.g., researching, pending approval, approved, declined)
    targets: [
        {
            id: generateId(),
            companyName: 'Apple',
            status: 'researching',
            logo: "//logo.clearbit.com/apple.com",
            keyContact: ["Adam Trien", "Gentry Ganote", "Mark Zuckerberg", "Peter Thiel"],
            companyInfo: ["Patents"],
            financialPerformance: []
        },
        {
            id: generateId(),
            companyName: 'Insiten',
            status: 'approved',
            logo: "//logo.clearbit.com/insiten.com",
            keyContact: ["Adam Trien", "Gentry Ganote", "Mark Zuckerberg", "Peter Thiel"],
            companyInfo: ["Patents"],
            financialPerformance: []
        },
        {
            id: generateId(),
            companyName: 'Facebook',
            status: 'approved',
            logo: "//logo.clearbit.com/facebook.com",
            keyContact: ["Adam Trien", "Gentry Ganote", "Mark Zuckerberg", "Peter Thiel"],
            companyInfo: ["Patents"],
            financialPerformance: []
        },
        {
            id: generateId(),
            companyName: 'Bitcoin',
            status: 'researching',
            logo: "//logo.clearbit.com/bitcoin.com",
            keyContact: ["Adam Trien", "Gentry Ganote", "Mark Zuckerberg", "Peter Thiel"],
            companyInfo: ["Patents"],
            financialPerformance: []
        },
        {
            id: generateId(),
            companyName: 'Meetup',
            status: 'approved',
            logo: "//logo.clearbit.com/meetup.com",
            keyContact: ["Adam Trien", "Gentry Ganote", "Mark Zuckerberg", "Peter Thiel"],
            companyInfo: ["Patents"],
            financialPerformance: []
        },
        {
            id: generateId(),
            companyName: 'Guitar Center',
            status: 'approved',
            logo: "//logo.clearbit.com/guitarcenter.com",
            keyContact: ["Adam Trien", "Gentry Ganote", "Mark Zuckerberg", "Peter Thiel"],
            companyInfo: ["Patents"],
            financialPerformance: []
        },
        {
            id: generateId(),
            companyName: 'Boo Digital',
            status: 'pending',
            logo: "//logo.clearbit.com/boodigital.com",
            keyContact: ["Adam Trien", "Gentry Ganote", "Mark Zuckerberg", "Peter Thiel"],
            companyInfo: ["Patents"],
            financialPerformance: []
        },
        {
            id: generateId(),
            companyName: 'Make & Build',
            status: 'declined',
            logo: "//logo.clearbit.com/instagram.com",
            keyContact: ["Adam Trien", "Gentry Ganote", "Mark Zuckerberg", "Peter Thiel"],
            companyInfo: ["Patents"],
            financialPerformance: []
        },
    ]
};

export default function targetList(state = INITIAL_STATE, action) {
    // var index;
    // var newState;
    switch (action.type) {
        case ADD_TARGET:
            console.log('ADD_TARGET Action');
            return { ...state, targets: [ ...state.targets, { ...action.payload.target, id: generateId() } ] };
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
        case EDIT_TARGET:
            return { ...state, targets: state.targets.map((e) => {
                console.log(e.id, action.payload.target.id);
                if(action.payload.target && e.id == action.payload.target.id) return action.payload.target;
                return e;
            })};
        case REMOVE_TARGET:
            return { ...state, targets: state.targets.filter((e) => e.id !== action.payload.id) };
        default:
            return state;
    }
}