import React from 'react';
import '../componentStyles/RandomQuote.css';

const RandomQuote = ({randomQuote}) => {
    return (
        <div className="QouteContainer">
        <div className="Quote">
            <p className="RandomQuote">
                "{randomQuote}"
            </p>
        </div>
        </div>
    )
}

export default RandomQuote
