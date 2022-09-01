import React from 'react';
import './info-container'

function CardInfo(props) {
    return (
        <div className="info-container">
            <img src={ props.imagem } />
            <div>
                <h4>{ props.email }</h4>
            </div>
        </div>
    )
}

export default CardInfo;