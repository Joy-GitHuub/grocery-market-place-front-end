import React from 'react';
import '../../Style/Shop.css'
import FeaturedProduct from '../Shared/MoreProductCard/FeaturedProduct';
import RegularProduct from './RegularProduct';
import useHandleToCart from './../../Hooks/useHandleToCart';

const Shop = () => {
    const {isSuccess, setIsSuccess, handleAddToCart} = useHandleToCart()

    return (
        <div className='shop_container'>
            <div className="side_shop_container">
                <FeaturedProduct
                isSuccess={isSuccess}
                setIsSuccess={setIsSuccess}
                handleAddToCart={handleAddToCart}
                />
            </div>

            <div className="products_container_side">
                <RegularProduct
                    isSuccess={isSuccess}
                    setIsSuccess={setIsSuccess}
                    handleAddToCart={handleAddToCart}
                />
            </div>
        </div>
    );
};

export default Shop;