import React from 'react';
import '../../Style/Footer.css'

const Footer = () => {
    return (
        <div className='footer_container'>
            <div className="footer_first_side">
                <h1>About Company</h1>
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>

                <div className='app_web'>
                        <h3>Download APP for fast and secure shopping: </h3>
                        <img src="https://f8g8b9p5.rocketcdn.me/themes/greengrocery/wp-content/uploads/2022/03/app-store.png" alt="" />
                        <img src="https://f8g8b9p5.rocketcdn.me/themes/greengrocery/wp-content/uploads/2022/03/google-play.png" alt="" />
                </div>
            </div>
            <div className="footer_second_side">
                <div className='link_side'>
                <ul>
                    <div>
                        <h3>Links</h3>
                    </div>
                        <li>GreenGrocery INC</li>
                        <li> About Us</li>
                        <li>Company</li>
                        <li>Careers</li>
                        <li>Brands</li>
                </ul>
                </div>
                <div className='link_side'>
                <ul>
                    <div>
                        <h3>Campaigns</h3>
                    </div>
                        <li>Campaign of the Week</li>
                        <li> 50% Sales</li>
                        <li>Pre-Sale</li>
                        <li>Bakery</li>
                        <li>Outlet</li>
                </ul>
                </div>
                <div className='link_side'>
                <ul>
                    <div>
                        <h3>Pages</h3>
                    </div>
                        <li>Order Tracking</li>
                        <li> Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Tutorials</li>
                        <li>FAQ</li>
                </ul>
                </div>
                <div className='link_side'>
                <ul>
                    <div>
                        <h3>Help</h3>
                    </div>
                        <li>Facebook Chat</li>
                        <li> Whatsapp Help</li>
                        <li>E-mail Support</li>
                        <li>Contact</li>
                </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;