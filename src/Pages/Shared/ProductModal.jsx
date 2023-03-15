import React, {useState} from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import '../../Style/ProductModal.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border:0,
};



const ProductModal = ({openBooking, handleBookingClose, product, isSuccess, setIsSuccess, handleAddToCart}) => {
  const [selectedImg, setSelectedImg] = useState(null);

  if (isSuccess) {
    setTimeout(() => {
      setIsSuccess(false);
      handleBookingClose()
    }, 1500);
  }


   const { name,imageURL, shortDescription, price, discountPrice, stock, category, tags, brand,order } =  product;


   const discount = ((price /100 ) * discountPrice)
   const newPrice = (price- discount).toFixed(2);


    return (
        <>
        {!imageURL &&
        <div>Wait</div>
        }
        {imageURL &&
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openBooking}
            onClose={handleBookingClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openBooking}>
                <Box sx={style}>
                    <div className="product_details_modal_container">
                      <div className="product_details_modal_wrap">
                    <div className='product_details_image_container'>
                      <div className='select_image_show'>
                      <img src={selectedImg ? selectedImg : imageURL[0]} alt="" />
                      </div>
                      <div className="all_image_select_option">
                      {
                   imageURL.map((img, index) => <img onClick={() => setSelectedImg(product.imageURL[index])} height="50px" style={{ cursor: 'pointer', marginRight: '25px' , borderRadius: '5px', border: '1px solid lightgray'} } src={img} alt="" key={index}  />)
                     }
                      </div>
                    </div>

                    <div className='product_details_container_wrap'>
                      <div className="product_details_info_name">
                        <h1>{name}</h1>
                      </div>

                      <div className="product_details_info_price_stock">
                        <div className='price_container_info'>
                          <span className='regular_price_color'><del>${price}</del></span>
                          <span className='discount_price_color'>${newPrice}</span>
                        </div>
                        <div className='product_details_info_stock'>
                        <span>{stock-order}  IN STOCK (CAN BE BACKORDERED)</span>
                        </div>
                      </div>

                      <div className="product_details_info_short">
                        <p>{shortDescription}</p>
                      </div>

                      <div className='product_add_to_cart_button'>
                      <button 
                      onClick={() =>handleAddToCart(product)}
                      >Add To Cart</button>
                      {
                        isSuccess &&
                        <span className='success-toast-msg'><i className='fas fa-cart-plus'></i> Item added to Cart</span>
                      }
                      </div>

                   <div className="product_more_info">
                    <h4>Categories: {category}</h4>
                    <h4>Brand: {brand}</h4>
                    <h4>Tags: {tags}</h4>
                   </div>

                      <div className='discount_percent_modal'>
                        {discountPrice}%
                      </div>
                    </div>
                      </div>
                    </div>
                </Box>
            </Fade>
        </Modal>}
        </>
    );
};

export default ProductModal;