import React from 'react';
import useAuth from '../../Context/useAuth';
import './Style/Wish.Card.css'

const WishCard = ({product}) => {

    const {carts, wish} = useAuth();
    const [cart, setCart] = carts;
    const [wishList, handleWishList, setWishList] = wish;

    const handleAddToCart = (product) => {
        product.orderStatus = 'pending';
        if(!cart.includes(product)){
            product.quantity = 1;
            const newCart = [...cart, product];
            setCart(newCart);
        }
        const rest = wishList.filter((pro) => pro._id !== product._id);
        setWishList(rest);
    };

    const handleRemoveWish = (id) => {
        const rest = wishList.filter((pro) => pro._id !== id);
        setWishList(rest);
    }



    const discount = ((product.price /100 ) * product.discountPrice)
    const productPrice = ((product.price- discount).toFixed(2));

    return (
<div className='cart_product_show'>
            <div className="image_and_name_wrap">
                <div className="cart_image_wrap">
                <img src={product?.imageURL[0]} alt="" />
                </div>
                <div className="name_and_quantity_wrap">
                    <h4>{product?.name}</h4>
                    <h6>${productPrice}
                    <div className="wish_list_container">
                    <i 
                    onClick={() => handleAddToCart(product)}
                    className="fa fa-cart-plus icon wish_list_style_color" ></i>
                    </div>
                    </h6>
                </div>
            </div>
            <div
            className='delete_btn' onClick={() => handleRemoveWish(product._id)}>
            <i className="fa fa-trash" aria-hidden="true"></i>
            </div>
        </div>
    );
};

export default WishCard;