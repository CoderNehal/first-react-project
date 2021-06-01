import React,{useState} from 'react'
import db from '../../../Firebase/Firebase'
import {useHistory} from 'react-router-dom'
import './CartItems.css'
import {Link} from 'react-router-dom'

const  CartItems = ({data}) =>{
    let userId = localStorage.getItem('userId');
   

    return (
        <div className='CartItems'>
          
           <div className="cartImgBox">
               <img src={data.img} alt=""/>
           </div>
           
           <div className="cartProductDescription">
               <div className='CartProductName'> <Link to='/shop/FHAS90Or8WnXqFKoEiYu'>{data.name}</Link></div>
               <h5 className='price'>₹{data.price}<span className='ActualPrice'>₹1200</span><span className='OFF'>18% off</span></h5> 
               <div className="cartControls">
                   <input type="button" value='+' id="plus"/>
                   <span>{data.qt}</span>
                   <input type="button" value='-' id="minus"/>
               </div>
           </div>
        </div>
    )
}

export default CartItems
