import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Alert from 'react-bootstrap/Alert';
import Loader from './Loader';
import RandomQuote from './RandomQuote';
import QuoteAuthor from './QuoteAuthor';
import {getRandomQoute} from '../actions/quoteActions';
import RandomButton from './RandomButton';

const MainPage = ({match}) => {
    const Path = match.path;

    const dispatch = useDispatch();
  
  const randomQuoteObj = useSelector(state => state.randomQuoteObj);

  const {
    loading, 
    quoteText, 
    quoteAuthor, 
    quoteGenre,
    error
   } = randomQuoteObj;

//    console.log(quoteAuthor)


  const getQouteHandler = ()=>{
      dispatch(getRandomQoute());
  };


  useEffect(()=>{
    dispatch(getRandomQoute());
  },[dispatch]);



    return (
        <div>
            <RandomButton path={Path} getQoute={getQouteHandler} />

            {loading ? <Loader /> : (
          <>
            {error ? <Alert variant='danger Alert'>{error.message}</Alert> : (
              <>
                <RandomQuote randomQuote={quoteText}/>
                <QuoteAuthor 
                author={quoteAuthor}
                genre={quoteGenre} />
              </>
            )}
          </>
        )}
        </div>
    )
}

export default MainPage

