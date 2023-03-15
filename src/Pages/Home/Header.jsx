import React from 'react';
import '../../Style/Header.css'
import useAuth from './../../Context/useAuth';

const Header = () => {


    const {firebase} = useAuth();
    const {user, logOut} = firebase;

    return (
        <div className='header-container'>
            <div className="header-left-side">
                <h4>Welcome to our online store!</h4>
            </div>
            <div className="header-right-side">
                <nav>
                    <ul>
                        <li><a href="/">CHECKOUT</a> 
                        </li>
                        <span>|</span>
                        <li><a href="/">CART</a></li>
                        <span>|</span>
                        <li><a href="/">FAQ</a></li>
                        <span>|</span>
                        {user?.email?<li><div onClick={logOut}>Log-Out</div></li>:
                        <li><a href='/'>About-Us</a></li>}

                    </ul>
                </nav>

                <div className="">
                    <select name="" id="">
                    <option value="ENG">ENG</option>
                     <option value="BAN">BAN</option>
                    <option value="IND">IND</option>
                    </select>
                </div>


                <div className="icon-container">
                    <li className='fa fa-facebook'></li>
                    <li className='fa fa-twitter'></li>
                    <li className='fa fa-pinterest'></li>
                </div>
                
            </div>
        </div>
    );
};

export default Header;