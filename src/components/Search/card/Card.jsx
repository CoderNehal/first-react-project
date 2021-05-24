import React,{useState} from 'react'


import './Card.css'
const Card = ({img,name,price,data})=> {
   

   
    
   
    return (
        <>
        <div className='searchCard'>
            <div className="cardImg">
                <img src={img} alt=""/>
            </div>
            <div className="cardInfo">
            <div className="productName">{name}</div>
            
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
