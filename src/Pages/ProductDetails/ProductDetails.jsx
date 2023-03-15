import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import './Style/ProductDetails.css';
import useDate from './../../Hooks/useDate';
import useOnSellProduct from './../../Hooks/useOnSellProduct';
import ProductCard from './../Shared/ProductCard';
import useAuth from './../../Context/useAuth';

const dealIma = `https://f8g8b9p5.rocketcdn.me/themes/greengrocery/wp-content/uploads/2022/05/3-370x370.png`;

const ProductDetails = () => {


    const { productId } = useParams();
    const [selectedImg, setSelectedImg] = useState(null);
    // const {handleAddToCart} = useHandleToCart();

    const {dayFour, daySeven, dayFourMonth, daySevenMonth} = useDate();
    

   const [detailsProduct, setDetailsProduct] = useState({});





    useEffect(() => {
        const url = `https://market-place-server-site.vercel.app/api/v1/product/${productId}`;
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            setDetailsProduct(data)
        })
    } , [productId]);


    const {data} = detailsProduct;

    if (data) {
        var {imageURL, name, stock, order, price, discountPrice, description, category, brand} = data[0]
    }
    const discount = ((price /100 ) * discountPrice)
    const newPrice = (price- discount).toFixed(2);
    const x = ((order / stock) * 100).toFixed(0);


    const {onSellProduct} = useOnSellProduct();
    const {data: onSell} = onSellProduct;


    const [orderQuantity, setOrderQuantity] = useState(1);


    const handleIncrease = () => {
        setOrderQuantity(orderQuantity + 1);
    };

    const handleDecrease = () => {
        if (orderQuantity > 1) {
            setOrderQuantity(orderQuantity - 1);
        }
    };

    const {carts} = useAuth();
    const [cart, setCart] = carts;
   
    const handleAddToCart = (product) => {
        product.orderStatus = 'pending';
        let newCart = [];
        const exists = cart.find((food) => food._id === product._id);
        if (product.quantity) {
            product.quantity = product.quantity + orderQuantity;
        }else{
            product.quantity = orderQuantity;
        }
    if (!exists) {
        newCart = [...cart, product];
    } else {
        const rest = cart.filter((food) => food._id !== product._id);
        newCart = [...rest, product];
    }

    setCart(newCart);   
    };







    return (
        <>
            {data && onSell &&
                <>
                <section className="all_product_details_section">
                    <div className="all_product_details_section_wrap">
                        <div className="product_details_section_image_side">
                        <div className="details_image_section_wrap">
                        <div className='details_selected_Image img-hover-zoom--brightness'>
                             <img src={selectedImg ? selectedImg : imageURL[0]} alt="" />
                             {discountPrice ?
                                <span className='discount_percent_details'>{discountPrice}%</span>
                                :
                                <></>
                                }
                        </div>
                        <div className="details_image_other_option">
                         {imageURL &&
                                imageURL.map((img, index) => <img
                                onClick={() => setSelectedImg(imageURL[index])} height="50px" style={{ cursor: 'pointer', marginRight: '25px' , borderRadius: '5px', border: '1px solid lightgray'} } src={img} alt="" key={index}  />)
                        }
                        {
                            !imageURL &&
                            <Loading/>
                        }
                      </div>
                        </div>
                        </div>

                        <div className="product_details_section_addToCart_side">
                           <div className="product_details_wrap">
                            <h3 className='product_name'>{name}</h3>
                            <div className='rating_section_wrap'>
                                <span>
                                <i className="fa fa-star gold_color" aria-hidden="true"></i>
                                <i className="fa fa-star gold_color" aria-hidden="true"></i>
                                <i className="fa fa-star gold_color" aria-hidden="true"></i>
                                <i className="fa fa-star gold_color" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                </span>
                                <span className='review_count'>2 Reviews</span>
                                <span className='divide'>|</span>
                                <span className='how_qna'>1 ANSWERED QUESTION</span>
                            </div>
                            <div className='price_and_discountPrice_wrap'>
                                <h4 className='price_color'><del>${price}</del></h4>
                                <h4 className='discount_color'>-</h4>
                                <h4 className='discount_color'>${newPrice}</h4>
                            </div>
                            <h6 className='stock_show'>
                                {stock-order} IN STOCK (CAN BE BACKORDERED)
                            </h6>

                            <p className='short_description'>
                                {description}
                            </p>
                            <div className='progress_bar_container'>
                                <div className='order_stock'>
                                <span>Ordered:  {order}</span>
                                <span style={{marginRight: '25px'}}>Items available: {stock-order}</span>
                                </div>
                            <div className="progress_bar">
                                <div style={{width: `${x}%`, }} className="order_progress">
                                    <span>{x}%</span>
                                </div>
                            </div>
                           </div>


                           <div className='productCount_info'>
                                        <button
                                        onClick={handleDecrease}
                                        ><i className="fas fa-minus"></i></button>

                                        <input type="text"  value={orderQuantity} />

                                        <button
                                        onClick={handleIncrease}
                                        ><i className="fas fa-plus"></i></button>

                                        <div className='product_add_to_cart_button2 '>
                                <button 
                            onClick={() =>handleAddToCart(data[0])}
                                >Add To Cart</button>
                                    </div>
                            </div>

                              <div className="delivery_and_return_size_wrap">
                              <div className=''>
                                <span><i className="fas fa-shipping-fast icon_delivery"></i></span>
                                <span>Delivery & Return</span>
                              </div>
                              <div className=''>
                                <span><i className="fa fa-question-circle icon_delivery" aria-hidden="true"></i></span>
                                <span>Size Guide </span>
                              </div>
                              <div className=''>
                                <span><i className="fa fa-calendar icon_delivery" aria-hidden="true"></i></span>
                                <span>Estimated Delivery:  &nbsp;
                                    {dayFourMonth} {dayFour < 10 ? `0${dayFour}`: dayFour } &nbsp; - &nbsp; {daySevenMonth} {daySeven < 10 ? `0${daySeven}`: daySeven}
                                </span>
                              </div>
                              <div className=''>
                                <span><i className="fas fa-smile icon_delivery"></i></span>
                                <span>people are viewing this right now</span>
                              </div>
                              </div>

                              <div className='category_brand_show'>
                              <p>Category: {category}</p>
                              <p>Brand: {brand}</p>

                              <div>
                                <p>Share:</p>
                                <span><i className="fab fa-facebook-f facebook"></i></span>

                                <span><i className="fab fa-twitter twitter"></i></span>

                                <span><i className="fab fa-pinterest pinterest"></i></span>
                                
                                <span><i className="fab fa-linkedin linkedin"></i></span>

                                <span><i className="fab fa-whatsapp whatsapp"></i></span>

                                <span><i className="fab fa-viber viber"></i></span>
                              </div>
                              </div>

                             </div>
                            </div>
                       

                        <div className="product_details_section_rule_side">
                        <div className='world_class_free'>
                            <span><i aria-hidden="true" className="fas fa-shipping-fast"></i></span>
                            <span>
                            World Class Free Shipping
                            </span>
                        </div>
                        <div className="secured_shopping">
                            <span>
                            <i aria-hidden="true" className="fas fa-shopping-bag"></i>
                            </span>
                            <span>
                                %100 Secured Shopping
                            </span>
                        </div>
                        <div className="secured_2">
                            <span>
                            <i aria-hidden="true" className="fab fa-cc-discover"></i>
                            </span>
                            <span>
                                %100 Secured Shopping
                            </span>
                        </div>

                        <div className="why_greenGrocery">
                            <h3>Why Green Grocery?</h3>

                            <li>
                                <span><i aria-hidden="true" className="fas fa-check"></i></span>
                                <span>Free 90-Day Returns</span>
                            </li>

                            <li>
                            <span><i aria-hidden="true" className="fas fa-check"></i></span>  
                            <span>%100 Secured Shopping</span>
                            </li>

                            <li>
                            <span><i aria-hidden="true" className="fas fa-check"></i></span>  
                            <span>Sold and Shipped by GG</span>
                            </li>

                            <li>
                            <span><i aria-hidden="true" className="fas fa-check"></i></span>  
                            <span>High Level Customization</span>
                            </li>

                        </div>

                           <div className="deals_week">
                            <div className="deals_week_image_wrap">
                                <img src={dealIma} alt="" />
                            </div>
                            <div className='deals_week_details'>
                              <div className='text'>
                                <h5>3 Products</h5>
                                <h5>Dairy & Eggs</h5>
                                <h4>Dairy Products</h4>
                              </div>
                                <button>{`Check Campaign   >`}</button>
                            </div>
                            </div> 
                        </div>
                    </div>    
                    </section>  

                    <section className='product_details_and_other_product_show'>
                        <div className="your_may_also_like">
                            <h3>Your May Also Like</h3>

                            <div className='your_also_like_product'>
                                {
                                    onSell.map((product) => <ProductCard
                                    key={product._id}
                                     product={product}/>)
                                }
                            </div>
                        </div>
                    </section>
                </>
            }
        </>
    );
};

export default ProductDetails;