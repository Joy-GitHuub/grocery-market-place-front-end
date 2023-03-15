import React from 'react';
import '../../Style/Popup.css'

const Popup = ({setPopup}) => {

    return (
        <div className='popup_container'>
            <div className="popup_card">
                <div className="first_popup_side">
                    <img src="https://static.doofinder.com/main-files/uploads/2020/05/Ideas-crear-tienda-online.jpg" alt="" />
                </div>
                <div className="second_popup_side">
                    <h3>Subscribe To Our Website</h3>

                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis officiis rerum nam! Officiis ratione explicabo neque id culpa. Voluptas tempore hic cum adipisci ullam beatae, dolorum expedita vitae perferendis repellendus?</p>

                    <div className='popup_email_input_wrap'>
                       <input type="email" placeholder='Email Address....' /> 
                       <button>SUBSCRIBE</button>
                    </div>

                    <button
                    onClick={() => setPopup(false)}
                    className='close_popup_icon'>
                    <i className="fa fa-window-close" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Popup;