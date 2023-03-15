import React, {useState} from 'react';
import ProductCard from '../Shared/ProductCard';
import useProducts from './../../Hooks/useProducts';
import '../../Style/RegularProduct.css'
import Loading from '../Shared/Loading/Loading';


const RegularProduct = ({isSuccess, setIsSuccess, handleAddToCart}) => {

    
    const {products} = useProducts();
    const {data} = products;




        const [openBooking, setBookingOpen] = useState(false);

        const handleBookingOpen = () =>{ 
            setBookingOpen(true)
        };
        const handleBookingClose = () => {
            setBookingOpen(false)
        };
    

 

    return (
        <>
        {data ?
                    <div className='regular_product_container'>
                    <h1>Regular Products</h1>
                    <div className='regular_product_wrap'>
                    {data &&
                        data.slice(8, 16).map((product) => <ProductCard
                        handleAddToCart={handleAddToCart}
                        isSuccess={isSuccess}
                        setIsSuccess={setIsSuccess}
                        openBooking={openBooking}
                        handleBookingOpen={handleBookingOpen}
                        handleBookingClose={handleBookingClose}
                        key={product._id} product={product} />)
                    }
                    </div>
                </div>
                :
                <Loading/>
        }
        </>
    );
};

export default RegularProduct;