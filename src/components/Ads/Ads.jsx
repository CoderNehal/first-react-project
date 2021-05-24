import React from 'react'
import './Ads.css'
import {Link} from 'react-router-dom'
// import Ad1 from '../../images/Ad1.jpg'
// import Ad2 from '../../images/1745.jpg'
const Ads = ({Ad}) => {
    return (
        <Link to='/collection'>
        <div className='Ads'>
           <img className='adOffer' src={Ad} alt=""/>
        </div>
        </Link>
    )
}

export default Ads
