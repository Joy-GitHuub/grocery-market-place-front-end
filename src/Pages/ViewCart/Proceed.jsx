import React from 'react';
import Header from '../Home/Header';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import { Link } from 'react-router-dom';
import Parched from './../Parched/Parched';

const Proceed = () => {
    return (
        <div>
            <Header/>
            <Navbar/>

            <div className="privacy_container">
                <div className="image-part" style={{paddingBottom: '0px', height: '350px'}}>
                    <img src="https://f8g8b9p5.rocketcdn.me/themes/greengrocery/wp-content/themes/greengrocery/images/hero-default-bg.png" alt="" />

                <div className='text-container'>
                <h3>Added Cart</h3>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li>{`>`}</li>
                <li><Link to={'/orderInfo'}>proceed</Link></li>
            </ul>
                </div>

            </div>
            </div>

            <Parched/>

            <Footer/>
        </div>
    );
};

export default Proceed;