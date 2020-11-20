import React from 'react';
import { Link } from 'react-router-dom';
import '../componentStyles/RandomQuote.css';

const Brand = () => {
    return (
        <div>
            <Link to='/' style={{textDecoration: 'none'}}>
                <div className="Brand">
                    <h2>Random Quotes</h2>
                </div>
            </Link>
        </div>
    )
}

export default Brand
