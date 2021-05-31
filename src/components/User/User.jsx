import React, { useState, useEffect } from 'react';
import './User.css';
import backbtn from '../../images/user-Left-arrow.svg';
import okKartLogo from '../../images/OkLogo.svg';
import db, { fire } from '../../Firebase/Firebase';
import $ from 'jquery';
import Spinner from '../Loading/Loading';
import { Redirect, useHistory, Link } from 'react-router-dom';
const User = () => {
	let history = useHistory();
	useEffect(() => {
		authListner();
	}, []);
	const [email, setemail] = useState('');
	const [password, setpassword] = useState('');
	const [user, setuser] = useState('');
	const [Loading, setLoading] = useState(false);
	const [redirect, setredirect] = useState(null);
	// const [userInfo, setuserInfo] = useState({
	// 	address: '',
	// 	name: '',
	// 	city: '',
	// 	pincode: '',
	// 	gender: '',
	// });
	if (redirect) {
		return <Redirect to={redirect} />;
	}
	const authListner = () => {
		fire.auth().onAuthStateChanged((User) => {
			if (User) {
				setuser(User);
			} else {
				setuser('');
			}
		});
	};

	const HandleLogin = () => {
		setLoading(true);
		fire
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then((res) => {
				const currentUser = fire.auth().currentUser;
				setLoading(false);
				if ('user' in res) {
					db.collection('Address')
						.doc(currentUser.uid)
						.get()
						.then((doc) => {
							var data = doc.data();

							localStorage.setItem('username', data.name);
							localStorage.setItem('address', data.address);
							localStorage.setItem('city', data.city);
							localStorage.setItem('pincode', data.pincode);
							localStorage.setItem('gender', data.gender);
							// db.collection('Favourites')
							// 	.doc(localStorage.getItem('userId'))
							// 	.set({
							// 		favItems: [],
							// 	});
							// 	db.collection('orders')
							// 	.doc(localStorage.getItem('userId'))
							// 	.set({
							// 		orders: [],
							// 	});
						});
					setuser(currentUser);
					// localStorage.setItem('isLogged', 'true');
					// localStorage.setItem('username', 'OurKart user');
					// localStorage.setItem('email', email);
					// localStorage.setItem('userId', currentUser.uid);
					$('#Message').css('color', 'green');
					$('#Message').text('Logged in successfully!');

					setInterval(() => {
						setredirect('/');
					}, 1000);
				}
			})
			.catch((e) => {
				setLoading(false);
				switch (e.code) {
					case 'auth/user-not-found':
					case 'auth/invalid-email':
						$('#Message').css('color', 'red');
						$('#Message').text(e.message);
						break;
					case 'auth/wrong-password':
						$('#Message').css('color', 'red');
						$('#Message').text(e.message);
						break;
					default:
						$('#Message').css('color', 'red');
						$('#Message').text('Unknow error occured');
				}
			});
	};

	if (Loading) {
		return <Spinner />;
	} else {
		return (
			<div className='UserContainer'>
				<img src={okKartLogo} id='loginLogo' alt='' className='okKartLogo' />
				<div className='User'>
					<div className='userNav'>
						<img src={backbtn} onClick={() => history.goBack()} alt='' />
					</div>
					<h3>Login</h3>
					<br />
					<br />
					<p>Email</p>
					<input
						type='text'
						value={email}
						className='email'
						onChange={(e) => setemail(e.target.value)}
					/>
					<br />
					<br />
					<p>Password</p>
					<input
						type='password'
						value={password}
						onChange={(e) => setpassword(e.target.value)}
					/>
					<br />
					<br />
					<br />
					<div className='submit'>
						<input
							type='button'
							onClick={HandleLogin}
							value='Log in'
							name=''
							id=''
						/>
					</div>
					<h5 id='Message'></h5>
					<h5 id='dontHaveAccount'>
						Don't have account?{' '}
						<span>
							<Link to='/signup'>Sign up</Link>
						</span>
					</h5>
				</div>
			</div>
		);
	}
};

export default User;
