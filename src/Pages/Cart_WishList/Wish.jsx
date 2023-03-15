import React from 'react';
import WishCard from './WishCard';

const Wish = ({wish}) => {

    
    return (
        <div className='modal-cart'>
        <div className="full_dev">
        <div className="cart_container_icon">
        <p>Wishlist Added Item</p>
        <i className="fa fa-heart icon wash_list_header" aria-hidden="true"></i>
        <span className='cart_length_cart_container'>
            {wish?.length}
        </span>
        </div>
        <div className='underline2'></div>
            <div className="cart_added_product_show">
                <div className="added_product_cart_container">
                    {
                        wish.map((product) => <WishCard key={product._id} product={product} />)
                    }
                </div>
                <div className='underline'></div>


                <div className='free_shipping_details'>
                    <p>Free shipping on all orders over $100</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Wish;