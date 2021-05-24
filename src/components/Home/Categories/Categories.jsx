import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';
function Categories() {
	return (
		<>
			<div className='categoriesHeading'>
				<h3 id='categories'>Categories</h3>
				<p id='more'>
					<Link to='/collection'>more &gt;</Link>{' '}
				</p>
			</div>
			<div className='catbox'>
				<Link to={{
            pathname:'/search/mobile',
            Props:'mobile'
          }}>
				<div id='cat-item-1'>
					<p>Mobiles</p>
				</div>
				</Link>
				<Link to={{
            pathname:'/search/laptops',
            Props:'laptops'
          }}>
				<div id='cat-item-2'>
					<p>Laptops</p>
				</div>
				</Link>
				<Link to={{
            pathname:'/search/headphones',
            Props:'headphones'
          }}>
				<div id='cat-item-3'>
					<p>Headphones</p>
				</div>
				</Link>
			</div>
		</>
	);
}

export default Categories;
