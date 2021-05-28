import React,{useState} from 'react'
import {Link} from 'react-router-dom'

import './FavCard.css'
const Card = ({img,name,price,data,DeleteThisItem})=> {
   

   
    
   
    return (
        <>
        <div className='searchCard'>
            <div onClick={()=>DeleteThisItem(data.id)} className='delete'>X</div>
            <div className="cardImg">
                <img src={img} alt=""/>
            </div>
            <div className="cardInfo">
           <Link to={`/shop/${data.id}`}> <div className="productName">{name}</div></Link>
            
            <div className="productDescription" >
            
            <h5 className='price'>₹{price.toLocaleString()}<span className='ActualPrice'>₹{(price + (price * data.discount)/100).toFixed()}</span><span className='OFF'>{data.discount}% off</span></h5> 
            <ul>
            {data.specs.map(spec=>{
                return <li key={spec}>{spec}</li>
            })}
            </ul>
            
            </div>
            <p>Read more...</p>
            </div>
            
        </div>
        <hr/>
        </>
    )
}

export default Card
