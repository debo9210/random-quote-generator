import React from 'react';
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAuthorQuote} from '../actions/quoteActions';
import RandomButton from './RandomButton';
import RandomQuote from './RandomQuote';
import Loader from './Loader';

const QuoteList = ({match}) => {
    const name = match.params.authorName;
    const dispatch = useDispatch();

    const randomQouteAuthor = useSelector(state => state.randomQouteAuthor);

    const {loading, authorQoutes} = randomQouteAuthor;

    const authorQouteList = authorQoutes.map(quote => (
        <RandomQuote 
            key={quote._id} 
            randomQuote={quote.quoteText}
            />
    ));



    useEffect(()=>{
        dispatch(getAuthorQuote(name));
    }, [dispatch, name]);

    // console.log(name);

    return (
        <>
            <RandomButton />
            <div style={{width: '720px', margin: '0 auto'}}>
            {loading ? <Loader /> : (
                <>
                    <h1 className='AuthorName'>{name}</h1>
                    {authorQouteList}
                </>
                
            )}
            </div>
        </>
        
    )
}

export default QuoteList
