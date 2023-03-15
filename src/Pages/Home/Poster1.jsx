import React from 'react';
import '../../Style/Poster1.css';

const Poster1 = () => {
    return (
        <div className='poster1_container'>
            <div className='first-poster'>
                <img src="https://k4j3j2s7.rocketcdn.me/bacola/wp-content/uploads/2021/05/home-banner-15.jpg" alt="" />
                <div className='text_container'>
                    <h3>Everything is so fresh</h3>
                    <h2>Only in Bacola</h2>
                    <p>Bacola Weekend Discount</p>
                    <button>Shop Now</button>
                </div>
            </div>
            <div className='first-poster'>
                <img src="https://k4j3j2s7.rocketcdn.me/bacola/wp-content/uploads/2021/05/home-banner-16.jpg" alt="" />
                <div className='text_container'>
                    <h3>Everything is so fresh</h3>
                    <h2>Only in Bacola</h2>
                    <p>Bacola Weekend Discount</p>
                    <button>Shop Now</button>
                </div>
            </div>

        </div>
    );
};

export default Poster1;