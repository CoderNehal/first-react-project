/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Offer.css'
import OfferBack from '../../../images/pexels-matej-819012.jpg'
import headphones from '../../../images/e304a-oneplus-original-imafwgkvchwhf63s 1.png'
import {Link} from 'react-router-dom'
function Offer() {
    return ( 
        <div className="offerBack">
        <img src={OfferBack} alt=""/>
        <div className="offer">
          <div id="text">
          upto 50% off on headphones
          <a id='more'><Link to='/shop/GImbFdZRsa1sf7YTpbwv'>more &gt;</Link> </a>
          </div>
         <div id="headphoenImg">
         <img src={headphones} alt=""/>
        
         </div>
        </div>
       
      </div>
    )
}

export default Offer
