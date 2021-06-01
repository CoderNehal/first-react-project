import React, { useEffect, useState } from 'react';
import './Cart.css';
import leftArrow from '../../images/left-arrow.svg';
import CartItems from './CartItems/CartItems';
import Spinner from '../Loading/Loading';
import { Link, useHistory } from 'react-router-dom';
import db from '../../Firebase/Firebase';
const Cart = () => {
	let history = useHistory();
	const [cart, setcart] = useState([]);
	const [Loading, setLoading] = useState(true);
	let LocalData = [];
	useEffect(() => {
		db.collection('cart')
			.doc(localStorage.getItem('userId'))
			.get()
			.then((doc) => {
				var data = doc.data().cartItems;
				let finalArray = [];
				if (data !== 0 || data !== undefined) {
					finalArray = data.map(function (obj) {
						return obj.id;
					});
				}
				finalArray.forEach((productId) => {
					db.collection('products')
						.doc(productId)
						.get()
						.then((doc) => {
							const id = productId;
							let indx =finalArray.indexOf(productId)
							const qt =data[indx].qt
							console.log(qt)
							LocalData.push({ id, ...doc.data(),qt });
							console.log(LocalData);
							setcart(LocalData);
						});
				});

				// data.forEach((productId) => {
				// 	db.collection('products')
				// 		.doc(productId)
				// 		.get()
				// 		.then((doc) => {
				// 			const id = doc.id;
				// 			let data = { id, ...doc.data() };
				// 			orderData.push(data);
				// 			// console.log(data)
				// 			setcart(orderData);
				// 		});
				// });
			});

		setInterval(() => {
			setLoading(false);
		}, 1000);
	}, []);

	let cartItemsToLoad = (
		<>
			{/* Keep these divs out of map else they will be repeated */}

			{cart.length !== 0 ? (
				cart.map((product) => {
					return (
						<div key={product.id}>
							<Link to={`/shop/${product.id}`}>
								<CartItems data={product} />
							</Link>
						</div>
					);
				})
			) : (
				<h4>Add to cart something {localStorage.getItem('username')} </h4>
			)}
		</>
	);
	if (Loading) {
		return <Spinner />;
	} else {
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
};

export default Cart;
