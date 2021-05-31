import React, { useState, useEffect } from 'react';
import './Fav.css';
import Card from './FavCard/FavCard';
import db from '../../Firebase/Firebase';
import Spinner from '../Loading/Loading';
import backbtn from '../../images/user-Left-arrow.svg';
import { Link, useHistory } from 'react-router-dom';
const Fav = () => {
	let history = useHistory();
	const [Favs, setFavs] = useState([]);
	const [Loading, setLoading] = useState(true);
	const [toReRender, settoReRender] = useState(false);
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
							const id = doc.id;
							const data = { id, ...doc.data() };
							favData.push(data);

							setFavs(favData);
						});
				});
			});
		setInterval(() => {
			setLoading(false);
		}, 3000);
	}, []);
	const DeleteThisItem = (id) => {
		let fav = Favs;
		var finalArray = fav.map(function (obj) {
			return obj.id;
		});

		if (finalArray.includes(id)) {
			const indx = finalArray.indexOf(id);
			finalArray.splice(indx, 1);
			console.log(finalArray);
			alert('Removed successfully');
			db.collection('Favourites')
				.doc(localStorage.getItem('userId'))
				.set({
					favItems: finalArray,
				})
				.then(() => {
					window.location.reload(true);
					finalArray.forEach((productId) => {
						db.collection('products')
							.doc(productId)
							.get()
							.then((doc) => {
								const id = doc.id;
								const data = { id, ...doc.data() };
								favData.push(data);

								setFavs(favData);
							});
					});
				});
		}
		setInterval(() => {
			setLoading(false);
		}, 2000);
	};
	console.log(Favs);
	let loadThis = (
		<div className='FavContainer'>
			<div className='FavNav'>
				<img src={backbtn} onClick={() => history.goBack()} alt='' />
			</div>
			<h3>Favourites</h3>
			{Favs.length != 0 ? (
				Favs.map((product) => {
					return (
						<div>
							<Card
								key={product.name}
								img={product.img}
								name={product.name}
								price={product.price}
								data={product}
								DeleteThisItem={DeleteThisItem}
							/>
						</div>
					);
				})
			) : (
				<h4
					style={{
						display: 'flex',

						alignItems: 'center',
						height: '100%',
						padding: '7em 10vw',
					}}>
					favourite something {localStorage.getItem('username')} {' :)'}
				</h4>
			)}
		</div>
	);
	return <>{Loading ? <Spinner /> : loadThis}</>;
};

export default Fav;
