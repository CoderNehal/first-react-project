import React, { useState, useEffect } from 'react';
import './Orders.css';
import Card from '../Search/card/Card';
import db from '../../Firebase/Firebase';
const Orders = () => {
	const [orders, setorders] = useState(null);
	const [tp, settp] = useState(null)
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
						});
				});
				
				setorders(orderData);
				
				
			});
	}, []);

	

	return(
        <div className="OrderhContainer">
			<h1>sdsds</h1>
          <ul>
			{orders?orders.map(element => {
				settp(true)
				return <h1>{element.name}</h1>
			}):<h1>wdwd</h1>}
		  </ul>
        </div>
        )
};

export default Orders;
