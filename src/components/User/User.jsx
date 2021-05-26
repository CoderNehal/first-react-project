import React, { useState ,useEffect} from 'react';
import './User.css';
import backbtn from '../../images/user-Left-arrow.svg';
import {fire} from '../../Firebase/Firebase';
import $ from 'jquery';
import Spinner from '../Loading/Loading'
import {Redirect} from 'react-router-dom'
const User = () => {
    useEffect(() => {
        
        authListner();
    }, [])
	const [email, setemail] = useState('');
	const [password, setpassword] = useState('');
    const [user, setuser] = useState('')
    const [Loading, setLoading] = useState(false)
    const [redirect, setredirect] = useState(null)
    if (redirect) {
        return <Redirect to={redirect} />
      }
      const authListner = () =>{
        fire.auth().onAuthStateChanged(User=>{
            if(User){
                setuser(User)
            }else{
                setuser('')
                
            }
        })
    }
      
    
	const HandleLogin = () => {
        setLoading(true)
		fire
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then((res) => {
                setLoading(false)
				if ('user' in res) {
                    setuser()
					$('#Message').css('color', 'green');
					$('#Message').text('Logged in successfully!');
                    setInterval(() => {
                        setredirect('/')
                    }, 1000);
                    
				} 
			})
			.catch((e) => {
                setLoading(false)
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
  
   
   
    if(Loading){
        return <Spinner />
    }else{
	return (
		<div className='UserContainer'>
			<div className='User'>
				<div className='userNav'>
					<img src={backbtn} alt='' />
				</div>
				<h3>Login</h3>
				<br />
				<br />
				<p>Email</p>
				<input type='text' value={email} onChange={(e) => setemail(e.target.value)} />
				<br />
				<br />
				<p>Password</p>
				<input type='password' value={password} onChange={(e) => setpassword(e.target.value)} />
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
			</div>
		</div>
	);
    }
};

export default User;
