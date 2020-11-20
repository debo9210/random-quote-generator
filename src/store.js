import {
    createStore, 
    combineReducers, 
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import {randomQuoteReducer, RandomQuoteAuthorReducer} from './reducers/RandomQouteReducer';

const reducer = combineReducers({
    randomQuoteObj: randomQuoteReducer,
    randomQouteAuthor: RandomQuoteAuthorReducer
});

const initialState = {};

const middleware = [thunk];

const devTools = 
    process.env.NODE_ENV === 'production' 
        ? applyMiddleware(...middleware)
        : composeWithDevTools(applyMiddleware(...middleware));


const store = createStore(
    reducer,
    initialState, 
    devTools
    );


export default store;