import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../Context/useAuth';
import ProductModal from '../Shared/ProductModal';

const OnSell = ({product, handleAddToCart, isSuccess, setIsSuccess}) => {
    const {_id,imageURL, status, name, price, discountPrice} = product;
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    
    const discount = ((price /100 ) * discountPrice)
    const newPrice = (price- discount).toFixed(2);

    const {carts, wish} = useAuth();
    const [cart] = carts;
    const exists = cart.find((pro) => pro._id === product._id);


    const [wishList, handleWishList, setWishList] = wish;
    const wishExists = wishList.find((pro) => pro._id === product._id)

    const handleAddedWish = (product) => {
      if (!cart.includes(product)) {
          const newWishList = [...wishList, product];
          setWishList(newWishList);
      }
  }

    const navigate = useNavigate();
    const navigateToServiceDetail = id =>{
      navigate(`/productDetails/${id}`);
  }

    return (
        <div>
         {product.imageURL && 
         
         <div className='featured_product_card_section' >
                <div className='featured_product_card_container'>
            <div className="featured_card_wrap">
                <div className="featured_product_image_wrap">
                    <img
                    onClick={() => navigateToServiceDetail(_id)}
                    style={{width: '65px'}} src={imageURL[0]} alt="" />
                </div>
                    <span className='border_'></span>
                <div className='featured_card_info_wrap'>
                  <div className="featured_product_status">
                    <p>{status}</p>
                  </div>
                  <div className='featured_product_name'>
                    <h4>{name.length >25 ? `${name.slice( 0,25)}....`: name }</h4>
                  </div>
                  <div className='featured_product_priceInfo'>
                  <div className='price_container_info'>
                          <span className='regular_price_color'><del>${price}</del></span>
                          <span className='discount_price_color'>${newPrice}</span>
                        </div>
                  </div>
                </div>
                
                <div className='animation_info'>
                  {!exists &&<i
                  onClick={() => handleAddToCart(product)}                  
                   className="fal fa-cart-plus icon-add-to-cart" ></i>}
            {
                wishExists ?<i className="fas fa-heart icon-cart" style={{color: 'red'}}></i> 
                  :
                <i
                 onClick={ () =>handleAddedWish(product)}
                className="far fa-heart icon-cart" 
                ></i>
            }
                    <i
                    onClick={handleBookingOpen}
                    className="far fa-eye icon-add-to-cart"
                    ></i>
                  </div>
            </div>
        </div>
             </div>} 

             {
                <ProductModal
                product={product}
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
                handleAddToCart={handleAddToCart}
                isSuccess={isSuccess}
                setIsSuccess={setIsSuccess}
                />
             }
        </div>
    );
};

export default OnSell;