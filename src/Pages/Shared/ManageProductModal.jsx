import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border:0,
  };


const ManageProductModal = ({open, handleClose,product}) => {
    const [selectedImg, setSelectedImg] = React.useState(null);

    const { name,imageURL, shortDescription, price, discountPrice, stock, category, tags, brand, order,view } =  product;


   const discount = ((price /100 ) * discountPrice)
   const newPrice = (price- discount).toFixed(2);

    return (
        <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
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


                   <div className="product_more_info">
                    <h4>Categories: {category}</h4>
                    <h4>Brand: {brand}</h4>
                    <h4>Tags: {tags}</h4>
                    <h4>Orders: {order}</h4>
                    <h4>View: {view}</h4>
                   </div>

                      <div className='discount_percent_modal'>
                        {discountPrice}%
                      </div>
                    </div>
                      </div>
                    </div>
        </Box>
      </Modal>
        </div>
    );
};

export default ManageProductModal;