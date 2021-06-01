import React, { useState } from 'react';
import db from '../../../Firebase/Firebase';
import { useHistory } from 'react-router-dom';
import './CartItems.css';
import { Link } from 'react-router-dom';

const CartItems = ({ data }) => {
	const [qt, setqt] = useState(data.qt);
	let userId = localStorage.getItem('userId');

	const HandleAddToCart = () => {
		const cartRef = db.collection('cart').doc(localStorage.getItem('userId'));

		cartRef.get().then((doc) => {
			const cartItemsFromFB = [...doc.data().cartItems];
			
			let localCartItems = [];
			let finalArray = [];
			if (cartItemsFromFB !== 0 || cartItemsFromFB !== undefined) {
				finalArray = cartItemsFromFB.map(function (obj) {
					return obj.id;
				});
			}

			//product increace the quintity

			let indx = finalArray.indexOf(data.id);
			let localQt = cartItemsFromFB[indx].qt;
			localCartItems = cartItemsFromFB;
			localCartItems[indx].qt = localQt + 1;
			cartRef
				.update({
					cartItems: localCartItems,
				})
				.then(() => {
					setqt(qt + 1);
				});
		});
	};
    const HandleRemoveFromCart = () => {
		const cartRef = db.collection('cart').doc(localStorage.getItem('userId'));

		cartRef.get().then((doc) => {
			const cartItemsFromFB = [...doc.data().cartItems];
			
			let localCartItems = [];
			let finalArray = [];
			if (cartItemsFromFB !== 0 || cartItemsFromFB !== undefined) {
				finalArray = cartItemsFromFB.map(function (obj) {
					return obj.id;
				});
			}

			//product increace the quintity

			let indx = finalArray.indexOf(data.id);
			let localQt = cartItemsFromFB[indx].qt;
			localCartItems = cartItemsFromFB;
			localCartItems[indx].qt = localQt - 1;
            if(localCartItems[indx].qt===0){
                localCartItems.splice(indx,1)
                cartRef
				.update({
					cartItems: localCartItems,
				}).then(()=>{
                    window.location.reload(true)
                })
            }else{
			cartRef
				.update({
					cartItems: localCartItems,
				})
				.then(() => {
					setqt(qt - 1);
				});
            }
		});
	};
	return (
		<div className='CartItems'>
			<div className='cartImgBox'>
				<img src={data.img} alt='' />
			</div>

			<div className='cartProductDescription'>
				<div className='CartProductName'>
					<Link to={`/shop/${data.id}`}>{data.name}</Link>
				</div>
				<h5 className='price'>
					₹{data.price.toLocaleString()}
					<span className='ActualPrice'>
						₹{(data.price + (data.price * data.discount) / 100).toFixed()}
					</span>
					<span className='OFF'>18% off</span>
				</h5>
				<div className='cartControls'>
					<input type='button' value='+' id='plus' onClick={HandleAddToCart} />
					<span>{qt}</span>
					<input type='button' value='-' id='minus' onClick={HandleRemoveFromCart} />
				</div>
			</div>
		</div>
	);
};

export default CartItems;
