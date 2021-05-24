import React,{useState} from 'react'
import db from '../../../Firebase/Firebase'
import {useHistory} from 'react-router-dom'
import './CartItems.css'
import {Link} from 'react-router-dom'

const  CartItems = ({id,qt}) =>{
    let userId = localStorage.getItem('userId');
    
    const databseRef =db.collection('cart')
    .doc(userId)
    .collection('cartItems')
    .doc(id)
    const [NumberOfItems, setNumberOfItems] = useState(qt)
// eslint-disable-next-line no-unused-expressions
const Localqt = Number(qt) +1
console.log(Localqt);
const handleAction= () =>{
    
		db.collection('cart')
			.doc(userId)
			.collection('cartItems')
            .doc(id)
			.set({
                qt:Localqt
            }).then(
                setNumberOfItems(Localqt)
            )
}
console.log(id)
    return (
        <div className='CartItems'>
          
           <div className="cartImgBox">
               <img src="https://images-na.ssl-images-amazon.com/images/I/31HJnCvU2KL.jpg" alt=""/>
           </div>
           
           <div className="cartProductDescription">
               <div className='CartProductName'> <Link to='/shop/FHAS90Or8WnXqFKoEiYu'>Redmi K20 Pro (Glacier Blue, 8GB RAM, 256GB Storage)</Link></div>
               <h5 className='price'>₹2222<span className='ActualPrice'>₹1200</span><span className='OFF'>18% off</span></h5> 
               <div className="cartControls">
                   <input type="button" value='+' onClick={handleAction} id="plus"/>
                   <span>{NumberOfItems}</span>
                   <input type="button" value='-' id="minus"/>
               </div>
           </div>
        </div>
    )
}

export default CartItems
