import React, { useState } from 'react';
import './Navbar.css';
import ham from '../../images/ham.svg';
import okLogo from '../../images/OkLogo.svg';
import fav from '../../images/Fav.svg';
import cart from '../../images/Cart.svg';
import magnifier from '../../images/magnifier.svg';
import line from '../../images/Line 8.svg';
import { Link, Redirect } from 'react-router-dom';
import Home from '../../images/Vector-3.svg';
import Search from '../../images/Vector-2.svg';
import Collection from '../../images/Vector-1.svg';
import User from '../../images/Vector.svg';
import { NavLink } from 'react-router-dom';
import { fire } from '../../Firebase/Firebase';
const Navbar = (props) => {
	const [width, setWidth] = useState(false);
	const [sidebarContent, setsidebarContent] = useState(false);
	const [inpVal, setinpVal] = useState('');
	const [whyThis, setwhyThis] = useState('');
	const [redirect, setredirect] = useState(null);
	if (redirect) {
		return <Redirect to={redirect} />;
	}
	const sidebarStyle = {
		width: width ? '256px' : '0px',
		visibility: width ? 'visible' : 'hidden',
	};
	// eslint-disable-next-line eqeqeq
	if (width == true) {
		setTimeout(() => {
			setsidebarContent(true);
		}, 700);
	}
	const proFileStyle = {
		display: sidebarContent ? 'block' : 'none',
	};
	const signupLoginStyle = {
		display: sidebarContent ? 'flex' : 'none',
	};
	const ToggleSidebar = () => {
		setWidth(!width);
		setsidebarContent(false);
	};
	const ToggleSidebarWhenNoUserFound = () => {
		setWidth(false);
		setsidebarContent(false);
	};
	const logInUser = () => {
		setredirect('/login');
	};
	const logOutUser = () => {
		localStorage.setItem('isLogged', false);
		localStorage.removeItem('username');
		localStorage.removeItem('email');
		localStorage.removeItem('userId');
		localStorage.removeItem('name');
		localStorage.removeItem('address');
		localStorage.removeItem('city');
		localStorage.removeItem('pincode');
		localStorage.removeItem('gender');
		window.location.reload(true);
		fire.auth().signOut();
	};

	let LoadThisSidebar = (
		<>
			<div className='X' onClick={ToggleSidebar}>
				X
			</div>
			<div style={proFileStyle} className='profileDetails'>
				<div style={proFileStyle} className='profilePic'></div>
				<div style={proFileStyle} className='sidebarusername'>
					{localStorage.getItem('username')}
				</div>
				<div style={proFileStyle} className='sidebarEmail'>
					{localStorage.getItem('email')}
				</div>
			</div>
			<div style={proFileStyle} className='SidebarOptions'>
				<NavLink exact to='/' onClick={ToggleSidebar}>
					<div className='SidebarItem'>
						<img src={Home} alt='' />
						<p>Home</p>
					</div>
				</NavLink>
				<NavLink exact to='/search'>
					<div className='SidebarItem'>
						<img src={Search} alt='' />
						<p>Search</p>
					</div>
				</NavLink>
				<NavLink exact to='/collection'>
					<div className='SidebarItem'>
						<img src={Collection} alt='' />
						<p>Collection</p>
					</div>
				</NavLink>
				<NavLink exact to='/login'>
					<div className='SidebarItem'>
						<img src={User} alt='' />
						<p>User</p>
					</div>
				</NavLink>
			</div>
			<p className='logOut noselect' onClick={logOutUser}>
				Log Out
			</p>
		</>
	);
	let LoadSignUpButtton = (
		<div style={signupLoginStyle} className='sidebarsignup noselect'>
			<div className='X' onClick={ToggleSidebarWhenNoUserFound}>
				X
			</div>
			<p onClick={logInUser}>Sign Up / Log In</p>
		</div>
	);

	const handleSearch = (e) => {
		setwhyThis(`/search/${inpVal}`);
		if (e.key == 'Enter') {
			document.getElementById('search').click();
		}
	};
	const handleSearchText = (e) => {
		setinpVal(e.target.value);
	};
	return (
		<div className='Header'>
			<div style={sidebarStyle} className='sidebar'>
				{localStorage.getItem('isLogged') == 'true'
					? LoadThisSidebar
					: LoadSignUpButtton}
			</div>
			<div className='Navbar'>
				<div className='NvabarLeft'>
					<img className='Ham' onClick={ToggleSidebar} src={ham} alt='' />
					<img className='Logo' src={okLogo} alt='' />
				</div>
				<div className='NavbarRight'>
					<div className='fav noselect' onClick={localStorage.getItem('isLogged')=='false' ? logInUser : null}>
						<img
							
							src={fav}
							alt=''
						/>
					</div>
					<div className='cart noselect'>
					{localStorage.getItem('isLogged')=='false' ? <Link  to='/login'>
					<img id='cart' src={cart} alt=''  />
				</Link> : 
					<Link  to='/cart'>
					<img id='cart' src={cart} alt=''  />
				</Link>}
						
					</div>
				</div>
			</div>
			<Link
				to={{
					pathname: `${whyThis}`,
					Props: `${inpVal}`,
				}}>
				<div className='search' id='search'>
					<img src={magnifier} id='magnifier' alt='' />
					<img src={line} id='line' alt='' />
					<input
						type='text'
						onChange={handleSearchText}
						onKeyPress={handleSearch}
						className='searchbar'
						name=''
						id=''
					/>
				</div>
			</Link>
		</div>
	);
};

export default Navbar;
