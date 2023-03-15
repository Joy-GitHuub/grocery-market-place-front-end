import React from 'react';
import './Style/TotalCart.css';
import { useNavigate } from 'react-router-dom';
import useAuth from './../../Context/useAuth';

const TotalCart = ({cart}) => {

    const { order} = useAuth();
    const {setOrderProduct} = order

    let subTotal = 0;
    for (const product of cart) {
        const discount = ((product.price /100 ) * product.discountPrice)
        const newPrice = (product.price- discount).toFixed(2);
        subTotal = subTotal + (newPrice * product.quantity)
    }
    let shippingCost =parseFloat(((subTotal/ 100) * 15).toFixed(2))
    let totalPrice = parseFloat((subTotal + shippingCost).toFixed(2));


    const navigate = useNavigate();
    const handleProceedCart = () => {
        navigate('/proceed');
        const newCart = [...cart];
        setOrderProduct(newCart)
    }

    return (
        <div className='total_section_cart'>
            <h3>Order Summary</h3>
            <div className="subTotal_amount">
                <h5>Sub-Total ({cart.length} items) </h5>
                <h5>$ {subTotal.toFixed(2)}</h5>
            </div>

            <div className="shipping_details">
                <h4>Shipping Fee</h4>
                <h5> ${shippingCost}</h5>
            </div>

            <div className="total_price_show">
                <h5>Total</h5>
                <h5>$ {totalPrice}</h5>
            </div>

            <div className="voucher_code_apply">
                <input type="text" placeholder='Enter Voucher Code.....' />
                <button>APPLY</button>
            </div>

            {cart.length ?<div className="perched_btn">
                <button onClick={handleProceedCart}>Proceed To Checkout</button>
            </div>
            :
            <></>    
            }
        </div>
    );
};

export default TotalCart;