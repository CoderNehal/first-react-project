import React, { useState, useEffect } from 'react';
import './Search.css';
import { Link } from 'react-router-dom';
import db from '../../Firebase/Firebase';
import Spinner from '../Loading/Loading';
import Card from './card/Card';
import NoSearchResult from '../NoSearchResult/NoSearchResult';
const Search = (props) => {
	let name = props.location.Props;
	let searchFromHome = props.location.HomeProps;
	const [InputValue, seInputValue] = useState('');
	const [SearchData, setSearchData] = useState([]);
	const [isFound, setisFound] = useState(true);
	const [Loading, setLoading] = useState(false);

	const handleOnChange = (e) => {
		seInputValue(e.target.value);
	};

	const removeCollection = () => {
		document.getElementById('name').style.display = 'none';
		setSearchData([]);
	};
	const Xstyle = {
		// eslint-disable-next-line eqeqeq
		display: InputValue == '' ? 'none' : 'block',
	};
	const resetInput = () => {
		seInputValue('');
		document.getElementById('searchbar').value = '';
	};

	let productsToRender = (
		<div className='searchContainer'>
			{SearchData
				? SearchData.map((product) => {
						return (
							<Link to={`/shop/${product.id}`}>
								<Card
									key={product.name}
									img={product.img}
									name={product.name}
									price={product.price}
									data={product}
								/>
							</Link>
						);
				  })
				: alert('dfgdfd')}
		</div>
	);

	useEffect(() => {
		// eslint-disable-next-line eqeqeq
		if (name != undefined) {
			db.collection('products')
				.where('type', '==', name)
				.get()
				.then((snapshot) => {
					const products = [];
					snapshot.docs.forEach((doc) => {
						const id = doc.id;
						const data = { id, ...doc.data() };
						products.push(data);
					});
					
					setSearchData(products);

					setisFound(true);
				});
		}
		
		
	}, [name]);
	useEffect(() => {
		
		if(searchFromHome!==undefined){
			seInputValue(searchFromHome)
			LetsLoadSomeSearchedProduct()
			if(SearchData.length!==0){
				setisFound(true);
			}
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[searchFromHome])
	const LetsLoadSomeSearchedProduct = () => {
		document.getElementById('name').style.display = 'none';
		setLoading(true);
		db.collection('products')
			.get()
			.then((snapshot) => {
				const products = [];
				snapshot.docs.forEach((doc) => {
					const id = doc.id;
					const name = doc.data().name.toLowerCase();
					const type = doc.data().type.toLowerCase();
					const brand = doc.data().brand.toLowerCase();
					const data = { id, ...doc.data() };
					const ForSearch = data.specs;
					const specs = ForSearch.map((str) => str.toLowerCase()).join(' ');
					//const res = this.filterIt(doc,InputValue.toLowerCase())

					if (
						name.includes(InputValue.toLowerCase()) ||
						specs.includes(InputValue.toLowerCase()) ||
						type.includes(InputValue.toLowerCase()) ||
						brand.includes(InputValue.toLowerCase())
					) {
						products.push(data);
					}

					setLoading(false);
				});

				// eslint-disable-next-line eqeqeq
				if (products.length != 0) {
					setSearchData(products);
					setisFound(true);
				} else {
					setisFound(false);
				}
			});
	};

	return (
		<>
			<div className='search'>
				<input
					type='text'
					onChange={handleOnChange}
					className='searchbar'
					name=''
					placeholder='Search for the best....'
					id='searchbar'
				/>
				<input
					type='button'
					className='X'
					onClick={resetInput}
					style={Xstyle}
					value='X'
					id=''
				/>
				<input
					type='button'
					className='find'
					value='find'
					onClick={LetsLoadSomeSearchedProduct}
					id=''
				/>
			</div>
			<input
				type='button'
				value={`${name}  X`}
				name=''
				onClick={removeCollection}
				id='name'
				style={{ display: name ? 'block' : 'none' }}
			/>
			<hr />
			{Loading ? <Spinner /> : isFound ? productsToRender : <NoSearchResult />}
		</>
	);
};

export default Search;
