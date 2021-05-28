import React, { useState, useEffect } from 'react';
import './Fav.css';
import Card from './FavCard/FavCard';
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
			setLoading(false)
	}, []);
	const DeleteThisItem =(id) =>{
		const index = Favs.indexOf(id)
		let favs = Favs
		if (index > -1) {
			favs.splice(index, 1);
		  }
		console.log(favs,index)
	}
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
				<h2 style={{display:'flex',justifyContent:'center',alignItems:'center',height:'80vh'}}>favourite something {localStorage.getItem('username') } :) </h2>
			)}
		</div>
	);
	return <>{Loading ? <Spinner /> :  loadThis}</>;
};

export default Fav;
