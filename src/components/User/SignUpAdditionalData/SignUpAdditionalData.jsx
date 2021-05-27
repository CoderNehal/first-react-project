import React, { useState, useEffect } from 'react';
import '../User.css';
import './SignUpAdditionalData.css';
import backbtn from '../../../images/user-Left-arrow.svg';
import okKartLogo from '../../../images/OkLogo.svg';
import db from '../../../Firebase/Firebase';
import $ from 'jquery';
import Spinner from '../../Loading/Loading';
import { Redirect, useHistory, Link } from 'react-router-dom';

const SignUpAdditionalData = ({ id }) => {
	
	const [name, setname] = useState('');
	const [Address, setAddress] = useState('');
	const [user, setuser] = useState('');
	const [Loading, setLoading] = useState(false);
	const [redirect, setredirect] = useState(null);
	const [city, setcity] = useState('');
	const [pincode, setpincode] = useState(null);
	const [gender, setgender] = useState('');
    if (redirect) {
		return <Redirect to={redirect} />;
	}

	const HandleSignUp = () => {
		setLoading(true);
		db.collection('Address')
			.doc(id)
			.set({
				name: name,
				address: Address,
				city: city,
				pincode: pincode,
				gender: gender,
			})
			.then(() => {
				setLoading(false);
				alert('Account created successfully! press ok to continue')
				localStorage.setItem('username', name);
				localStorage.setItem('address', Address);
				localStorage.setItem('city', city);
				localStorage.setItem('pincode', pincode);
				localStorage.setItem('gender', gender);
				$('#Message').css('color', 'green');
				$('#Message').text('account details added  successfully!');
                setTimeout(() => {
                    setredirect('/')
                }, 1000);
			});
	};
	const handlePincode = (e) => {
		setpincode(e.target.value);
	};

	if (Loading) {
		return <Spinner />;
	} else {
		return (
			<div className='UserContainer'>
				<img src={okKartLogo} id='loginLogo' alt='' className='okKartLogo' />
				<div className='User'>
					<h3>Additional sign up data</h3>
					<br />
					<p>Full Name</p>
					<input
						type='text'
						value={name}
						className='fullName'
						onChange={(e) => setname(e.target.value)}
					/>
					<br />
					<br />
					<p>Address</p>
					<textarea
						onChange={(e) => setAddress(e.target.value)}
						value={Address}
						resize='false'
						cols='40'
						rows='5'></textarea>
					<br />
					<br />
					<div className='forCityAndPin'>
					City{' '}
					<input
						type='text'
						value={city}
						onChange={(e) => setcity(e.target.value)}
						className='city'
					/>
					
					Pincode{' '}
					<input
						type='number'
						max='6'
						min='1'
						value={pincode}
						onChange={handlePincode}
						className='pincode'
					/>
					</div>
					<br />
					<br />
					Gender
					<input
						type='radio'
						name='gender'
						className='gender'
						value='male'
						onChange={(e) => setgender(e.target.value)}
					/>
					<label htmlFor='male'>Male</label>
					<input
						type='radio'
						name='gender'
						className='gender'
						value='female'
						onChange={(e) => setgender(e.target.value)}
					/>
					<label htmlFor='female'>Female</label>
					<br />
					<br />
					<div className='submit'>
						<input
							type='button'
							className='finish'
							onClick={HandleSignUp}
							value='Finish'
							name=''
							id=''
						/>
					</div>
					
					
				</div>
			</div>
		);
	}
};

export default SignUpAdditionalData;
