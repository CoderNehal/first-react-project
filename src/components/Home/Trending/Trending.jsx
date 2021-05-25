import React, { useState, useEffect } from 'react';
import './Trending.css';


const Trending = ({ data }) => {
	console.log(data);

	return (
		<div className='Trending'>
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
		</div>
	);
};

export default Trending;
