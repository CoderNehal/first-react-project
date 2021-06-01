import React from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import back from '../../images/left arrow ciricle.png';
import './ProductDescription.css';
import tag from '../../images/price-tag.svg';
import box from '../../images/open-cardboard-box.svg';
import share from '../../images/share.svg';
import heart from '../../images/heart.svg';
import { useEffect, useState } from 'react';
import db from '../../Firebase/Firebase';
import { data } from 'jquery';
import Spinner from '../Loading/Loading';

const ProductDescription = (props) => {
	let id = props.match.params.id;
	const [Data, setData] = useState({
		name: 'Redmi K20 Pro (Glacier Blue, 8GB RAM, 256GB Storage)',
		price: 27000,
		type: 'mobile',
		specs: [
			'48+13+8MP primary camera with 20MP front facing camera',
			'16.23 centimeters (6.39-inch) AMOLED capacitive touchscreen with 2340 x 1080 pixels resolution, 403 ppi pixel density',
			'Memory, Storage & SIM: 6GB RAM | 128GB storage | Dual SIM with dual standby (4G+4G)',
			'Android v9 Pie operating system (Upgradable to Android Q) with 2.84GHz Qualcomm Snapdragon 855 Octa core processor, Adreno 640 GPU',
			'Android v9 Pie operating system (Upgradable to Android Q) with 2.84GHz Qualcomm Snapdragon 855 Octa core processor, Adreno 640 GPU',
		],
		img: 'https://images-na.ssl-images-amazon.com/images/I/31HJnCvU2KL.jpg',
		brand: 'Redmi',
		discount: 0,
	});
	const [Loading, setLoading] = useState(true);
	const [redirect, setredirect] = useState(null);

	useEffect(() => {
		db.collection('products')
			.doc(id)
			.get()
			.then((doc) => {
				var data = doc.data();
				setData(data);

				setLoading(false);
			});
		setLoading(true);
	}, id);
	let history = useHistory();
	if (redirect) {
		return <Redirect to={redirect} />;
	}
	const AddToOrders = () => {
		let orders = [];
		const ordersRef = db

			.collection('orders')
			.doc(localStorage.getItem('userId'));
		ordersRef.get().then((doc) => {
			if (doc.data() == undefined) {
				//if no user found
				orders.push(id);
				ordersRef.set({
					orders: orders,
				});
			} else {
				let alreadyOrdered = doc.data().orders;
				orders = alreadyOrdered;
				orders.push(id);
				ordersRef.set({
					orders: orders,
				});
			}
		});
	};
	const AddToFavs = () => {
		let Fav = [];
		const favRef = db

			.collection('Favourites')
			.doc(localStorage.getItem('userId'));
		favRef.get().then((doc) => {
			if (doc.data() == undefined) {
				// console.log(doc.data());
				//if no user found
				alert('Added to Favourites ❤️');
				Fav.push(id);
				favRef.set({
					favItems: Fav,
				});
			} else {
				let alreadyFav = doc.data().favItems;
				Fav = alreadyFav;

				if (doc.data().favItems.length == 0) {
					alert('Added to Favourites ❤️');
					Fav.push(id);
					favRef.set({
						favItems: Fav,
					});
				} else if (new RegExp(Fav.join('|')).test(id)) {
					alert('Already Fav ❤️');
					// console.log(new RegExp(Fav.join('|')));
				} else {
					alert('Added to Favourites ❤️');
					Fav.push(id);
					favRef.set({
						favItems: Fav,
					});
				}
			}
		});
	};

	const AddToCart = () => {
		const cartRef = db.collection('cart').doc(localStorage.getItem('userId'));

		cartRef.get().then((doc) => {
			const cartItemsFromFB = [...doc.data().cartItems];
			console.log(cartItemsFromFB);
			let localCartItems = [];
			let finalArray = [];
			if (cartItemsFromFB !== 0 || cartItemsFromFB !== undefined) {
				finalArray = cartItemsFromFB.map(function (obj) {
					return obj.id;
				});
			}
			if (cartItemsFromFB.length === 0) {
				//first product to push
				localCartItems.push({ id: id, qt: 1 });
				 console.log(localCartItems);
				cartRef.set({
					cartItems: localCartItems,
				});
			} 
			
			if (finalArray.includes(id) && finalArray.length !== 0) {
				//product increace the quintity
				let indx = finalArray.indexOf(id);
				let localQt = cartItemsFromFB[indx].qt;
				localCartItems = cartItemsFromFB;
				localCartItems[indx].qt = localQt + 1;
				cartRef.update({
					cartItems: localCartItems
				});
			} else {
				 localCartItems = cartItemsFromFB;
				 localCartItems.push({ id: id, qt: 1 });
				 console.log(localCartItems);
				 cartRef.update({
					cartItems: localCartItems
				});
			}
		});
	};
	if (Loading) {
		return <Spinner />;
	} else {
		return (
			<>
				<div className='navbar'>
					<button className='backBtn' onClick={() => history.goBack()}>
						<img src={back} alt='' />
					</button>
					<div className='rightNav'>
						<img src={heart} onClick={AddToFavs} alt='' />
						<img className='share' src={share} alt='' />
					</div>
				</div>

				<div className='ProductDescription'>
					<div className='imgbox'>
						<img src={Data.img} alt='' />
					</div>
					<div className='description'>
						<h4 className='productName'>{Data.name}</h4>
						<h3 className='price'>
							₹{Data.price.toLocaleString()}
							<span className='ActualPrice'>
								₹{(Data.price + (Data.price * Data.discount) / 100).toFixed(2)}
							</span>
							<span className='OFF'>{Data.discount}% off</span>
						</h3>
						<hr />
						<ul className='specs'>
							{Data.specs.map((spec) => {
								return <li>{spec}</li>;
							})}
						</ul>
						<button
							className='buy'
							onClick={() =>
								localStorage.getItem('isLogged') == 'false'
									? setredirect('/login')
									: AddToOrders()
							}>
							<img src={tag} alt='' />
							Buy now
						</button>
						<button
							className='box'
							onClick={() =>
								localStorage.getItem('isLogged') == 'false'
									? setredirect('/login')
									: AddToCart()
							}>
							<img src={box} alt='' />
							Add to box
						</button>
					</div>
				</div>
			</>
		);
	}
};
export default ProductDescription;
