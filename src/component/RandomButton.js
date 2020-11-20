import React from 'react';
import {Link} from 'react-router-dom';
import Brand from './Brand';
import '../componentStyles/RandomQuote.css';

const RandomButton = ({getQoute, path}) => {
    return (
        <div className="RandomBtnDiv">
            <Brand />
            <button 
                className="RandomBtn"
                onClick={getQoute}>
                <span className="RandomBtnText">
                    {path === '/' ? 'Random' : <Link to='/' style={{textDecoration: 'none', color: '#333333'}}>Back</Link>}
                </span>
                <span className="material-icons Renew">
                    {path === '/' ? 'autorenew' : 'arrow_back'}
                </span>
            </button>
        </div>
    )
}

export default RandomButton
