import axios from 'axios';
import { RANDOM_QOUTE_FAIL, RANDOM_QOUTE_SUCCESS, RANDOM_QUOTE_AUTHOR_FAIL, RANDOM_QUOTE_AUTHOR_REQUEST, RANDOM_QUOTE_AUTHOR_SUCCESS, RANDOM_QUOTE_REQUEST } from '../constants/QouteConstants';

// console.log(dispatch)

const url = 'https://quote-garden.herokuapp.com/api/v2/quotes/random';

export const getRandomQoute = () => (dispatch) =>  {
    dispatch({type: RANDOM_QUOTE_REQUEST});
    axios.get(url)
        .then(res => 
            dispatch({
                type: RANDOM_QOUTE_SUCCESS,
                text: res.data.quote.quoteText,
                author: res.data.quote.quoteAuthor,
                genre: res.data.quote.quoteGenre
            }))
        .catch(err => 
            dispatch({
                type: RANDOM_QOUTE_FAIL,
                payload: err
            }));
};


export const getAuthorQuote = (authorName)=> (dispatch)=>{
    dispatch({type: RANDOM_QUOTE_AUTHOR_REQUEST});

    axios.get(`https://quote-garden.herokuapp.com/api/v2/authors/${authorName}?page=1&limit=5`)
    .then(res => 
        dispatch({
            type: RANDOM_QUOTE_AUTHOR_SUCCESS,
            payload: res.data.quotes
        }))
    .catch(err => 
        dispatch({
            type: RANDOM_QUOTE_AUTHOR_FAIL,
            payload: err
        }));
};