import React, { useState, useEffect } from 'react';
import './Orders.css';
import Card from '../Search/card/Card';
import db from '../../Firebase/Firebase';
import Spinner from '../Loading/Loading';
import backbtn from '../../images/user-Left-arrow.svg'
import {Link,useHistory} from 'react-router-dom'
const Orders = () => {
	let history = useHistory();
	const [orders, setorders] = useState([]);
	const [Loading, setLoading] = useState(true);
	let orderData = [];
	useEffect(() => {
		db.collection('orders')
			.doc(localStorage.getItem('userId'))
			.get()
			.then((doc) => {
				var data = doc.data().orders;
				
				data.forEach((productId) => {
					db.collection('products')
						.doc(productId)
						.get()
						.then((doc) => {
							const id =doc.id;
							let data = {id,...doc.data()}
							orderData.push(data);
						
							setorders(orderData);
							setLoading(false);
						});
				});
			});
	}, []);
	
	let loadThis = (
		<>
			{
			
			orders.length != 0 ? (
				orders.map((product) => {
					console.log(product)
					return (
						<div className='OrderhContainer'>
							<div className='OrderNav'>
						<img src={backbtn} onClick={() => history.goBack()} alt='' />

						</div>
							<h3>Orders</h3>
							<Link to={`/shop/${product.id}`} >
							<Card
								key={product.name}
								img={product.img}
								name={product.name}
								price={product.price}
								data={product}
							/>
							</Link>
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
