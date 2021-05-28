import React, { useState, useEffect } from 'react';
import './Fav.css';
import Card from '../Search/card/Card';
import db from '../../Firebase/Firebase';
import Spinner from '../Loading/Loading';
import backbtn from '../../images/user-Left-arrow.svg'
import {Link,useHistory} from 'react-router-dom'
const Fav = () => {
	let history = useHistory();
	const [Favs, setFavs] = useState([]);
	const [Loading, setLoading] = useState(true);
	let favData = [];
	useEffect(() => {
		db.collection('Favourites')
			.doc(localStorage.getItem('userId'))
			.get()
			.then((doc) => {
				var data = doc.data().favItems;
				
				data.forEach((productId) => {
					db.collection('products')
						.doc(productId)
						.get()
						.then((doc) => {
							const id =doc.id;
							const data = {id,...doc.data()}
							favData.push(data);
							setLoading(false);
							setFavs(favData);
						});
				});
			});
	}, []);
	
	let loadThis = (
		<>
			{Favs.length != 0 ? (
				Favs.map((product) => {
					return (
						<div className='FavContainer'>
							<div className='FavNav'>
						<img src={backbtn} onClick={() => history.goBack()} alt='' />
					</div>
							<h3>Favourites</h3>
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

export default Fav;
