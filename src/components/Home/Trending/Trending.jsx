import React, { useState, useEffect } from 'react';
import './Trending.css';
import {Link} from 'react-router-dom'

const Trending = ({ data }) => {
	console.log(data);

	return (
		
		<Link to={`/shop/${data.id}`} className='Trending'>
			<div className="star">{data.discount}%</div>
			<div className='TrendingImgBox'>
				<img src={data.img} alt='' />
			</div>

			<div className='TrendingProductInfo'>
				<div className='TrendingProductname'>{data.name}</div>
				<div className='TrendingProductPrice'>
				₹{data.price.toLocaleString()}
					<span>₹{((data.price + (data.price * data.discount)/100).toFixed())}</span>
				</div>
			</div>
		</Link>
		
	);
};

export default Trending;
