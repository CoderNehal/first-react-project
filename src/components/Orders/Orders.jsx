import React, { useState, useEffect } from 'react';
import './Orders.css';
import Card from '../Search/card/Card';
import db from '../../Firebase/Firebase';
import Spinner from '../Loading/Loading';
const Orders = () => {
	const [orders, setorders] = useState([]);
	const [Loading, setLoading] = useState(true);
	let orderData = [];
	useEffect(() => {
		db.collection('orders')
			.doc(localStorage.getItem('userId'))
			.get()
			.then((doc) => {
				var data = doc.data().orders;
				// orderData = data;
				// console.log(data)
				// setorders(orderData)
				data.forEach((productId) => {
					db.collection('products')
						.doc(productId)
						.get()
						.then((doc) => {
							orderData.push(doc.data());
							setLoading(false);
							setorders(orderData);
						});
				});
			});
	}, []);
	
	let loadThis = (
		<>
			{orders.length != 0 ? (
				orders.map((product) => {
					return (
						<div className='OrderhContainer'>
							<h3>Orders</h3>
							<Card
								key={product.name}
								img={product.img}
								name={product.name}
								price={product.price}
								data={product}
							/>
						</div>
					);
				})
			) : (
				<h1>order something {localStorage.getItem('userId')} </h1>
			)}
		</>
	);
	return <>{Loading ? <Spinner /> : loadThis}</>;
};

export default Orders;
