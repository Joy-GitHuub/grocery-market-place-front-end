import React from 'react';
import '../../Style/GetEmail.css'

const GetEmail = () => {
    return (
        <section className='get_email_container_section'>
            <section className='full_container_wrap'>
            <div className='first_side_wrap'>
                <h3>$20 discount for  your first order</h3>
                <h1>Join our newsletter and get...</h1>
                <p>Join our email subscription now to get updates on promotions and coupons.</p>
                <div className='email_input_button'>
                {/* <i className='klbth-icon-mail'></i> */}
                <i className="fa fa-envelope" aria-hidden="true"></i>
                <input type="text"  placeholder='Enter Your Email Address....'/>
                <button>Subscribe</button>
                </div>
            </div>
            <div className="second_side_wrap">
                <div className="trick_image_wrap">
                    <img src="https://k4j3j2s7.rocketcdn.me/bacola/wp-content/uploads/2021/04/coupon.png" alt="" />
                </div>
            </div>
            </section>
        </section>
    );
};

export default GetEmail;