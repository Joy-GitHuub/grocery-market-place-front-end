import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from './../../Context/useAuth';
import CartCard from './CartCard';
import './Style/Cart.css';

const Cart = () => {
    const {carts}= useAuth();
    const [cart] = carts;

    const filterCart = cart?.filter((obj, index) => {
        return index === cart?.findIndex(o => obj.id === o.id && obj.name === o.name);
      });
    
    let subTotal = 0;
    cart.forEach(product => {
        const discount = ((product.price /100 ) * product.discountPrice)
        const productPrice = ((product.price- discount).toFixed(2) * product.quantity);
       subTotal = subTotal + productPrice;
    });
  
    const navigate = useNavigate();

    const handleCheckOut = () => {
        navigate(`/checkout`);
    }

    return (
        <div className='modal-cart'>
            <div className="full_dev">
            <div className="cart_container_icon">
                <p>Total Added Item</p>
            <i className="fa fa-cart-plus icon cart_header" aria-hidden="true"></i>
            <span className='cart_length_cart_container'>{cart.length}</span>
            </div>
            <div className='underline2'></div>
                <div className="cart_added_product_show">
                    <div className="added_product_cart_container">
                        {
                            filterCart?.map((product) => <CartCard
                            key={product._id}
                            product= {product}
                            />)
                        }
                    </div>
                    <div className='underline'></div>

                    <div className="sub_total_account">
                        <h4>SUBTOTAL:</h4>
                        <h4>${subTotal.toFixed(2)}</h4>
                    </div>

                    <div className='free_shipping_details'>
                        <p>Free shipping on all orders over $100</p>
                    </div>

                    <div className="continueShopping_and_checkOut_wrap">
                        <div className="continueShopping_btn">
                            <button>Continue Shopping</button>
                        </div>
                        <div className="checkout_btn">
                            <button onClick={handleCheckOut}>Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;