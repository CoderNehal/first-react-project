import React, { useState } from 'react';
import './Navbar.css';
import ham from '../../images/ham.svg';
import okLogo from '../../images/OkLogo.svg';
import fav from '../../images/Fav.svg';
import cart from '../../images/Cart.svg';
import magnifier from '../../images/magnifier.svg';
import line from '../../images/Line 8.svg';
import { Link } from 'react-router-dom';
import $ from 'jquery'
const Navbar = (props) => {
	const [width, setWidth] = useState(false);
	const [sidebarContent, setsidebarContent] = useState(false);
	const [inpVal, setinpVal] = useState('');
	const [whyThis, setwhyThis] = useState('');
	const sidebarStyle = {
		width: width ? '256px' : '0px',
		visibility: width ? 'visible' : 'hidden',
	};
	// eslint-disable-next-line eqeqeq
	if (width == true) {
		setTimeout(() => {
			setsidebarContent(true);
		}, 1400);
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
	const logInUser = () => {
		localStorage.setItem('isLogged', 'true');
		localStorage.setItem('username', 'Nehal Ughade');
		localStorage.setItem('email', 'Nehalughade1221@gmail.com');
		window.location.reload(true);
	};
	const logOutUser = () => {
		localStorage.removeItem('isLogged');
		localStorage.removeItem('username');
		localStorage.removeItem('email');
		window.location.reload(true);
	};

	let LoadThisSidebar = (
		<>
			
			<div style={proFileStyle} className='profileDetails'>
				<div style={proFileStyle} className='profilePic'></div>
				<div style={proFileStyle} className='sidebarusername'>
					{localStorage.getItem('username')}
				</div>
				<div style={proFileStyle} className='sidebarEmail'>
					{localStorage.getItem('email')}
				</div>
			</div>
			<p className='logOut' onClick={logOutUser}>
				Log Out
			</p>
		</>
	);
	let LoadSignUpButtton = (
		<div style={signupLoginStyle} onClick={logInUser} className='sidebarsignup'>
			<p>Sign Up / Log In</p>
		</div>
	);

	const handleSearch = (e) => {
		setwhyThis(`/search/${inpVal}`);
		if (e.key == 'Enter') {
			
			
			document.getElementById('search').click()
			
		}
	};
	const handleSearchText = (e) => {
		
		setinpVal(e.target.value);
	};
	return (
		<div className='Header'>
			<div style={sidebarStyle} className='sidebar'>
			<div className='X' onClick={ToggleSidebar}>
				X
			</div>
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
					<div className='fav'>
						<img src={fav} alt='' />
					</div>
					<div className='cart'>
						<Link to='/cart'>
							<img id='cart' src={cart} alt='' />
						</Link>
					</div>
				</div>
			</div>
			<Link
				to={{
					pathname: `${whyThis}`,
					Props:`${inpVal}`
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
