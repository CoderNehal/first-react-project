import React from 'react';
import './TopSelling.css';
import { Link } from 'react-router-dom';

function TopSelling() {
	return (
		<div className='TopSellingHeading'>
			<h3 id='categories'>Top Selling</h3>
			<p id='more'>
				<Link to='/collection/'>more &gt;</Link>
			</p>
		</div>
	);
}

export default TopSelling;
