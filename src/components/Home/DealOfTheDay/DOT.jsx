import React from 'react'
import './DOT.css'
import {Link} from 'react-router-dom'
const DOT = ()=> {
  

    return (
        <div className="DealsOfTheDay">
             <p className="DODText">
               Deals of the day
             </p>
             
             <div className="remainingTime">
              <p className="remaining">
              remaining:
              </p>
              <p className="time">
             12h 29min 
              </p>
             </div>
             <div className="deals">
               
               <Link to='/shop/FHAS90Or8WnXqFKoEiYu' >
               <div className="deal deal1">
                 <div className="img">
                   <img src="https://images-na.ssl-images-amazon.com/images/I/711dWcQCoLL._SL1500_.jpg" alt=""/>
                 </div>
                 <div className="productinfo">
                   <p className="productName">Redmi K20 Pro (Carbon Black, 128 GB)  (6 GB RAM)</p>
                   
                   <div className="price">
                   <p>₹27,000</p>
                   <small>₹35,100. </small>
                   </div>
                 </div>
               </div>
               </Link>
               <Link to ='/shop/t6Ig0hchCHSFd4Dv2IUf'>
               <div className="deal deal2">
               <div className="img">
                   <img src="https://rukminim1.flixcart.com/image/416/416/ju79hu80/refrigerator-new/x/j/q/rs72r5001m9tl-na-samsung-original-imaffdvnmybkhshe.jpeg?q=70" alt=""/>
                 </div>
                 <div className="productinfo">
                   <p className="productName">Samsung 700 L Frost Free Side by Side Refrigerator</p>
                   
                   <div className="price">
                   <p>₹23,490</p>
                   <small>₹27,718 </small>
                   </div>
                 </div>
               </div>
               </Link>
               <Link to='/shop/RuKopM5QJFO3qerhv9Kd'>
               <div className="deal deal3">
               <div className="img">
                   <img src="https://rukminim1.flixcart.com/image/416/416/ko0d6kw0/television/r/b/m/kd-50x74-sony-original-imag2jyupyqmcctu.jpeg?q=70" alt=""/>
                 </div>
                 <div className="productinfo">
                   <p className="productName">Sony Bravia 4K Ultra HD Smart Certified Android LED TV</p>
                   
                   <div className="price">
                   <p>₹379,990</p>
                   <small>₹417,989 </small>
                   </div>
                 </div>
               </div>
               </Link>
               <Link to='/shop/fEWN9QvqrUYs8hY67mRy'>
               <div className="deal deal4">
               <div className="img">
                   <img src="https://images-na.ssl-images-amazon.com/images/I/71fp5ankbqL._SL1500_.jpg" alt=""/>
                 </div>
                 <div className="productinfo">
                   <p className="productName">Apple Watch Series 5 Space Gray Aluminium Case</p>
                   
                   <div className="price">
                   <p>₹52,499 </p>
                   <small>₹62,998 </small>
                   </div>
                 </div>
               </div>
               </Link>
             </div>
           </div>
    )
}

export default DOT
