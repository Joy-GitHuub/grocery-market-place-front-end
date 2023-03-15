import React from 'react';
import useAuth from '../../../../Context/useAuth';
import ManageProductModal from '../../../Shared/ManageProductModal';
import './ManageProductCard.css'
import { useNavigate } from 'react-router-dom';

const ManageProductCard = ({product}) => {
        const {imageURL,name, status,_id, price,discountPrice} = product;

        const {viewOrder} = useAuth()
        const {setViewOrderId } = viewOrder;
        const navigate = useNavigate();
        const handleNavigate = (product) => {
          setViewOrderId(product);
          navigate(`/dashboard/manageProductUpdate`)
        };

        const [open, setOpen] = React.useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);

        const navigateToServiceDetail = id =>{
          navigate(`/dashboard/makeAdmin/${id}`);
      };


    return (
        <section className='manage_product_card_wrap'>
              <div className='featured_product_card_section'>
                <div className='featured_product_card_container'>
            <div className="featured_card_wrap">
                <div className="featured_product_image_wrap">
                    <img
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
                          <span className='discount_price_color'>${discountPrice}</span>
                        </div>
                  </div>
                </div>
                
                <div className='animation_info'>
                <i onClick={handleOpen} className="far fa-eye icon-add-to-cart"><span
                ></span></i>
                <i className="fas fa-edit icon-add-to-cart" aria-hidden="true" onClick={() => handleNavigate(product)}></i>
                <i className="fa fa-trash icon-add-to-cart" aria-hidden="true" onClick={() => navigateToServiceDetail(_id)}></i>
                  </div>
            </div>
        </div>
             </div>  

             <ManageProductModal
             product={product}
                open={open}
                handleClose={handleClose}
                ></ManageProductModal>
        </section>
    );
};

export default ManageProductCard;