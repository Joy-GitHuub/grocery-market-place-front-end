import React from 'react';
import '../../Style/Poster.css';
import image from '../../IMAGES/banner-box2.jpg'

const Poster = () => {
    return (
        <div className='poster-wrap'>
            <h3 className='poster-title-text'>
            <strong>100% Secure delivery </strong>
            without contacting the courier
            </h3>

            <div className='image-warp'>
            <img decoding="async" src={image} alt="" />
            </div>

            <button>SHOP NOW</button>
        </div>
    );
};

export default Poster;