import React from 'react'
import './User.css'
import backbtn from '../../images/user-Left-arrow.svg'
const User = () => {
    return (
        <div className="UserContainer">
            <div className="User">
                <div className="userNav">
                    <img src={backbtn} alt="" />
                   
                </div>
                <h3>Login</h3>
                <br />
                <br />
                <p>Email</p><input type="text" name="" id="" /><br /><br />
                <p>Password</p><input type="password" name="" id="" />
                <br /><br /><br />
                <div className="submit">
                <input type="button" value='Log in' name="" id="" />
                </div>
               
            </div>
        </div>
        
    )
}

export default User
