import React from 'react';
import {  useNavigate } from 'react-router-dom';
import '../../Style/ProductCard.css';
import ProductModal from './ProductModal';
import useHandleToCart from './../../Hooks/useHandleToCart';
import useAuth from './../../Context/useAuth';

const ProductCard = ({product }) => {

    const {_id,name, unit,price,  discountPrice, imageURL, status} = product;

    const {handleAddToCart, isSuccess, setIsSuccess} = useHandleToCart();

    const {carts, wish} = useAuth();
    const [cart] = carts;
    const exists = cart.find((pro) => pro._id === product._id);


    const [wishList, handleWishList, setWishList] = wish;
    const wishExists = wishList.find((pro) => pro._id === product._id)


    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);

    const discount = ((price /100 ) * discountPrice)
    const newPrice = (price- discount).toFixed(2);

    const navigate = useNavigate();

    const navigateToServiceDetail = id =>{
        navigate(`/productDetails/${id}`);
    }

    const handleAddedWish = (product) => {
        if (!cart.includes(product)) {
            const newWishList = [...wishList, product];
            setWishList(newWishList);
        }
    }


    return (
        <div>
        <div className='product_card_container'>
            <div className="product_card_warp">
                <div className='product_image_warp'>
                    <img src={imageURL[0]} alt="" />
                </div>
                <div className='product_info_warp'>
                <div className='status_unit_info'>
                    <span className='status'>{status}</span>
                    <span className='unit'>1 {unit}</span>
                </div>
                <div className="product_price">
                        <div className='price_discountPrice_wrap'>
                            <span className='regular_price'><del>${price}</del></span> 
                            <span className='discount_price'>{newPrice}</span>
                        </div>     
                    
                    <div className='product_name'  onClick={() => navigateToServiceDetail(_id)}>
                        <h4>{name.length >25 ? `${name.slice( 0,25)}....`: name }</h4>
                    </div>


                </div>

                <div className="sale_discount_">
                    <span>Sale!</span>
                </div>
                    <span className='discount_percent'>{discountPrice}%</span>
                <div className="sale_icon_container">
                {
                    !exists &&
                    <i className="fal fa-cart-plus icon-add-to-cart cart_icon_style" onClick={() =>handleAddToCart(product)} ></i>}
                
                {
                wishExists ? 
                <i className="fas fa-heart icon-cart wishlist_icon_style" style={{color: 'red' }}></i>
                :
                <i
                onClick={ () =>handleAddedWish(product)}
                className="far fa-heart icon-cart wishlist_icon_style" 
                >
                </i>
                }
                    <i
                    onClick={handleBookingOpen}
                    className="far fa-eye icon-add-to-cart eye_icon_style"
                    ></i>
                </div>

                </div>
            </div>
        </div>

        <ProductModal
                product={product}
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
                setIsSuccess={setIsSuccess}
                isSuccess={isSuccess}
                handleAddToCart={handleAddToCart}
            ></ProductModal>
        </div>
    );
};

export default ProductCard;