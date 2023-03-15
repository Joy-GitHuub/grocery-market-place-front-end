import React from 'react';
import './Style/CartCard.css'
import useAuth from './../../Context/useAuth';

const CartCard = ({product}) => {
    const discount = ((product.price /100 ) * product.discountPrice)
    const productPrice = ((product.price- discount).toFixed(2));


    const {carts} = useAuth();
    const [cart, setCart] = carts;

    const handleRemoveCart = (id) => {
       const restCart = cart.filter((product) => product._id !== id);
        setCart(restCart);
    };

    return (
        <div className='cart_product_show'>
            <div className="image_and_name_wrap">
                <div className="cart_image_wrap">
                <img src={product?.imageURL[0]} alt="" />
                </div>
                <div className="name_and_quantity_wrap">
                    <h4>{product?.name}</h4>
                    <h6>$({productPrice} * {product?.quantity})</h6>
                </div>
            </div>
            <div
            onClick={() => handleRemoveCart(product?._id)}
            className='delete_btn'>
            <i className="fa fa-trash" aria-hidden="true"></i>
            </div>
        </div>
    );
};

export default CartCard;