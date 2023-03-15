import React from 'react';
import useAuth from '../../Context/useAuth';
import Header from '../Home/Header';
import Navbar from '../Shared/Navbar';
import Search from '../Shared/Search';
import { Link } from 'react-router-dom';
import MyOrder from './MyOrder';
import './Style/CheckOut.css'
import Footer from '../Shared/Footer';
import TotalCart from './TotalCart';

const CheckOut = () => {
    const {carts} = useAuth();
    const [cart, setCart] = carts;

    const filterCart = cart?.filter((obj, index) => {
        return index === cart?.findIndex(o => obj.id === o.id && obj.name === o.name);
      });
    

    return (
        <div>
            <Header/>
            <Search/>
            <Navbar/>
            <div className="checkout_container">
                <div className="privacy_container">
                <div className="image-part" style={{paddingBottom: '0px', height: '350px'}}>
                    <img src="https://f8g8b9p5.rocketcdn.me/themes/greengrocery/wp-content/themes/greengrocery/images/hero-default-bg.png" alt="" />

                <div className='text-container'>
                <h3>Added Cart</h3>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li>{`>`}</li>
                <li><Link to={'/checkout'}>Cart</Link></li>
            </ul>
                </div>

            </div>
                </div>

            <div className="my_added_cart_product_container">
                <div className="cart_product_item_wrap">
                    {
                        filterCart?.map((product) => <MyOrder key={product._id}  product={product} cart={cart} setCart={setCart}/>)
                    }
                </div>
                <div className="cart_product_price_wrap">
                    <TotalCart cart={filterCart}/>
                </div>
            </div>

            </div>
        <Footer/> 
        </div>
    );
};

export default CheckOut;