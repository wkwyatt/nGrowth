import { combineReducers } from 'redux';
import targetList from './targetListReducer';
import target from './targetReducer';

const rootReducer = combineReducers({
    target,
    targetList
});

export default rootReducer;