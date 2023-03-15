import React from 'react';
import { Link } from 'react-router-dom';
import '../../Style/Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className="nav-left-side">
            <nav>
                <ul>
                   <Link to="/"> <li className='hover-underline-animation'>HOME</li></Link>
                    <Link to="/shop"><li className='hover-underline-animation'>SHOP</li></Link>
                   <a href="/"> <li className='hover-underline-animation'>PRODUCT</li></a>
                    <Link to="/privacy"><li className='hover-underline-animation'>Privacy</li></Link>
                    <a href="/"><li className='hover-underline-animation'>ABOUT</li></a>
                </ul>
            </nav>
            </div>

            <div className="nav-right-side">

                <div className="location">
                    <span className='title'>You Location</span>
                    <select className='select content'>
                    <option value="">Select You Location</option>
                     <option value="dhaka">Dhaka</option>
                    <option value="Chittagong">Chittagong</option>
                    </select>
                </div>


                <div className="discount">
                    <span className='title'>Only This Weekend</span>
                    <select className='select content'>
                   <option value="">Super Discount</option>
                    </select>
                </div>


                <div className="call">
                    <span className='title'>Call Anytime</span>
                    <span className='content'>+280 900 3434</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;