import React, { useEffect, useState } from 'react';
import './Cart.css';
import leftArrow from '../../images/left-arrow.svg';
import CartItems from './CartItems/CartItems';
import { Link,useHistory } from 'react-router-dom';
import db from '../../Firebase/Firebase';
function Cart() {
	const [data, setdata] = useState([]);
	
	let userId = localStorage.getItem('userId');
	let history = useHistory();
	useEffect(() => {
		let data = [];
		db.collection('cart')
			.doc(userId)
			.collection('cartItems')
			.get()
			.then((snapshot) => {
				snapshot.docs.forEach((doc) => {
					
					data.push(doc.data().cartItems);
				});
			});

		setdata(data);
		console.log(data);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);



//This fookin are not rednerig lets c what happens
	// eslint-disable-next-line no-unused-vars
	let cartItemsToLoad = (
		<div className='cartItems'>
			{data
				? data.map((product) => {
						return (
							<Link to={`/shop/${product.id}`}>
								<CartItems data={product} />
							</Link>
						);
				  })
				: alert('dfgdfd')}
		</div>
	);

	return (
		<div className='cart'>
			<div className='cartNav'>
				<img src={leftArrow} onClick={() => history.goBack()} alt='' />
				<h5>Order Details</h5>
				<div className='emptyDiv'></div>
			</div>
			<h4 id='MyCart'>My Cart</h4>
			 <div className='cartItems'>
				{/* {cartItemsToLoad} */}
				<CartItems id='FHAS90Or8WnXqFKoEiYu' qt='1' />
				
			 </div> 
			<div className='checkout'>
				<h4>Order Info</h4>
				<div className='subtotal'>
					<span>Subtotal</span> <span>₹ 1223</span>
				</div>
				<div className='shippingCost'>
					<span>Shipping cost</span>
					<span>₹ 100</span>
				</div>
				<div className='totalAmount'>
					<span>Total</span>
					<span>₹ 1323</span>
				</div>
				<input type='button' value='CHECKOUT' className='checkOutBtn' />
			</div>
		</div>
	);
}

export default Cart;
