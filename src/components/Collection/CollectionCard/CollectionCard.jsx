import React from 'react';

import './CollectionCard.css'
const CollectionCard = ({img,text}) => {
    const custStyle= {
        backgroundImage:`url(${img})`
    }
   
    return (
       
        <div style={custStyle} className="CollectionCard">
          <h3>{text}</h3>
        </div>
       
    )
}

export default CollectionCard