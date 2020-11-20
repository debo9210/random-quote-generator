import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import '../componentStyles/RandomQuote.css';

const QuoteAuthor = ({author, genre}) => {
    const randomQuoteObj = useSelector(state => state.randomQuoteObj);

    const {quoteAuthor} = randomQuoteObj;

    return (
        <div className="QuoteAuthorLink">
            <div className="AuthorInfo">
                <span className="QuoteAuthor">
                    {author}
                </span>
                <span className="QuoteGenre">{genre !== '' ? genre : 'Unkown'}</span>
            </div>
            <Link to={`/quoteList/${quoteAuthor}`}>
                <span className="material-icons Arrow" title='More quotes'>
                arrow_right_alt
                </span>
            </Link>
        </div>
    )
}

export default QuoteAuthor
