import React from 'react';
import useProducts from './../../../Hooks/useProducts';
import MoreProductCard from './MoreProductCard';
import '../../../Style/FeaturedProduct.css'
import Loading from './../Loading/Loading';

const FeaturedProduct = ({setIsSuccess, handleAddToCart, isSuccess}) => {

    



    const {products} = useProducts()
    const {data} = products;

    // const x = data?.sort(function(a , b) {
    //     return  b.order - a.order;
    // });
    // x?.reverse();
    // console.log(x?.slice(0,7));
    
    return (
            <>
        {data ?        
         <div className='featured_product_container_box'>
            <h3>Featured</h3>

            <div className='featured_product_container'>

                {
                    data?.slice(15).map((product) => <MoreProductCard
                    key={product._id}
                    product={product}
                    isSuccess={isSuccess}
                    setIsSuccess={setIsSuccess}
                    handleAddToCart={handleAddToCart}
                    ></MoreProductCard>)
                }

            </div>
        </div>
    :
    <Loading/>    
    }
            </>
    );
};

export default FeaturedProduct;