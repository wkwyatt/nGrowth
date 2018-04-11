import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import ReduxThunk from 'redux-thunk';
// import ReduxPromise from 'redux-promise';
// import { autoRehydrate } from 'redux-persist';
import rootReducer from '../reducers';



// const configureStore = () => {
//     const store = createStore(
//         rootReducer,
//         {},
//         compose(applyMiddleware(
//             ReduxThunk,
//             // ReduxPromise
//         ), autoRehydrate()));
//
//     return store;
// };

const configureStore = () => {
    return createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(thunk)
    );
}

const store = configureStore();

export default store;
