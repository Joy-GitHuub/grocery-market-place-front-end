import React from 'react';
import useDiscountProduct from '../../Hooks/useDiscountProduct';
import useHandleToCart from '../../Hooks/useHandleToCart';
import '../../Style/ManeCategories.css'
import BestSell from '../ProductSection/BestSell';
import DiscountSell from '../ProductSection/DiscountSell';
import OnSell from '../ProductSection/OnSell';
import useBestProduct from './../../Hooks/useBestProduct';
import useOnSellProduct from './../../Hooks/useOnSellProduct';

const image = `https://f8g8b9p5.rocketcdn.me/themes/greengrocery/wp-content/uploads/elementor/thumbs/vertical-banner-1-pvrhowqrke0cgswnzo2ijinadt90aywh3in5lstna8.png`;

const ManeCategories = () => {

    const {handleAddToCart, isSuccess, setIsSuccess} = useHandleToCart()

    // const {products} = useProducts();
    const {bestSellProducts} = useBestProduct();
    const {data: bestSell} = bestSellProducts;


    const {onSellProduct} = useOnSellProduct()
    const {data: onSell} = onSellProduct;


    const {discountProducts} = useDiscountProduct();
    const {data: discount} = discountProducts;

    return (
            <>
{   (bestSell  && onSell && discount) &&         

        <section className='mane_categories_product_container'>
            <section className='menu_image_wrap'>
                <img src={image} alt="" />
            </section>
            <section className="best_sell_product_section">
                <div className='section_title'>
                    <h3>Best-Sell</h3>
                </div>
                    <div className="best_sell_product_container">
                        {
                            bestSell?.map((product) => <BestSell key={product._id} product={product}
                            handleAddToCart={handleAddToCart}
                            isSuccess={isSuccess}
                            setIsSuccess={setIsSuccess}
                            />)
                        }
                    </div>
            </section>

            <section className='on_sell_product_section'>
                <div className="section_title">
                    <h3>On-Sell</h3>
                </div>
                <div className='on_sell_product_container'>
                            {
                                 onSell?.map((product) => <OnSell
                                 key={product._id}
                                 product={product}
                                 handleAddToCart={handleAddToCart}
                                 isSuccess={isSuccess}
                                 setIsSuccess={setIsSuccess}
                        />
                        )}
                    </div>
            </section>

            <section className="best_discount_product_section">
            <div className='section_title'>
                        <h3>Discount-Sell</h3>
            </div>
            <div className='on_sell_product_container'>
                            {
                                 discount?.map((product) => <DiscountSell
                                 key={product._id}
                                 product={product}
                                 handleAddToCart={handleAddToCart}
                                 isSuccess={isSuccess}
                                 setIsSuccess={setIsSuccess}
                        />
                        )}
                    </div>
            </section>
        </section>}
            </>
    );
};

export default ManeCategories;