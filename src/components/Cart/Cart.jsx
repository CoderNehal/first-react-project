import React, { useEffect, useState } from 'react';
import './Cart.css';
import leftArrow from '../../images/left-arrow.svg';
import CartItems from './CartItems/CartItems';
import { Link, useHistory } from 'react-router-dom';
import db from '../../Firebase/Firebase';
function Cart() {
	const [data, setdata] = useState([]);
	const [LoadNow, setLoadNow] = useState(false)

	let userId = localStorage.getItem('userId');
	let history = useHistory();
	useEffect(() => {
		

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	//This fookin are not rednerig lets c what happens
	// eslint-disable-next-line no-unused-vars
	let cartItemsToLoad = (
		<div className='cartItems'>
			{data.length!=0
				? data.map((product) => {
						return (
							<Link to={`/shop/${product.id}`}>
								<CartItems data={product} />
							</Link>
						);
				  })
				: <h1>fdfd</h1>}
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
			
				 {cartItemsToLoad}
		
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
