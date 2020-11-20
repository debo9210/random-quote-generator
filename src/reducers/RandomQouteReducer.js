import { 
    RANDOM_QUOTE_REQUEST, 
    RANDOM_QOUTE_SUCCESS, 
    RANDOM_QOUTE_FAIL,
    RANDOM_QUOTE_AUTHOR_REQUEST,
    RANDOM_QUOTE_AUTHOR_SUCCESS,
    RANDOM_QUOTE_AUTHOR_FAIL
} from '../constants/QouteConstants';

const initialState = {
    quoteText: '',
    quoteAuthor: '',
    quoteGenre: ''
};


export const randomQuoteReducer = (state=initialState, action)=>{
    switch(action.type){
        case RANDOM_QUOTE_REQUEST:
            return{...state, loading: true};
        case RANDOM_QOUTE_SUCCESS:
            return{
                ...state,
                quoteText: action.text,
                quoteAuthor: action.author,
                quoteGenre: action.genre,
                loading: false,
            };
        case RANDOM_QOUTE_FAIL:
            return{
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};


export const RandomQuoteAuthorReducer = (state={authorQoutes: []}, action)=>{
    switch(action.type){
        case RANDOM_QUOTE_AUTHOR_REQUEST:
            return{ ...state, loading: true};
        case RANDOM_QUOTE_AUTHOR_SUCCESS:
            return {
                ...state,
                authorQoutes: action.payload,
                loading: false
            };
        case RANDOM_QUOTE_AUTHOR_FAIL:
            return{loading: false, error: action.payload}
        default:
            return state;
    }
};