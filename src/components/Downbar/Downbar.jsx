import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Downbar.css';
import Home from '../../images/Home.svg';
import Search from '../../images/search.svg';
import Collection from '../../images/collection.svg';
import User from '../../images/user.svg';
import { NavLink } from 'react-router-dom';

const Downbar = () => {
	return (
		<div className='downbar-parent'>
			<div className='downbar'>
				<div className='icons'>
					<div className='icon'>
						<NavLink exact to='/'>
							<img src={Home} alt='' />
						</NavLink>
					</div>

					<div className='icon'>
						<NavLink exact to='/search'>
							<img src={Search} alt='' />
						</NavLink>
					</div>

					<div className='icon'>
						<NavLink exact activeStyle={{}} to='/collection'>
							<img src={Collection} alt='' />
						</NavLink>
					</div>

					<div className='icon'>
						<NavLink exact activeStyle={{}} to='/user'>
							<img src={User} alt='' />
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Downbar;
