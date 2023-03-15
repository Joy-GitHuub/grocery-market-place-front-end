import { Drawer } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import '../../Style/Search.css'
import Cart from '../Cart_WishList/Cart';
import Wish from '../Cart_WishList/Wish';
import useAuth from './../../Context/useAuth';

const Search = () => {

    const {carts, wish, firebase} = useAuth();
    const [cart] = carts;
    const [wishList] = wish;
  const {user} = firebase;

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });


    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setState({ ...state, [anchor]: open });
      };


    const [wishlistState, setWishlistState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });

      const toggleDrawerWishlist = (anchor, open) => (event) => {
        if (event &&event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setWishlistState({ ...wishlistState, [anchor]: open });
      };


    return (
        <div className='search-container'>
            <div className="img-item">
        <Link to="/">
                <img src="https://f8g8b9p5.rocketcdn.me/themes/greengrocery/wp-content/uploads/2022/05/greengrocery-logo-white.png" alt="" />
        </Link>       
            </div>

            <div className="search-box">
                <div className="search-input">
                    <input type="text" placeholder='Search Your Product...' />
                </div>
                <div className="search-btn">
                    <button><i className='fa fa-search'></i></button>
                </div>
            </div>

            <div className="main-item">
                <ul>

                        <li><Link to={'/dashboard'}  >
                        <li className='fa fa-user-circle-o icon'></li>
                        <span className='icon-name'></span>
                        </Link>
                        </li>
                        <li>
                        <>
                        <i className="fa fa-heart icon wash_list_header" aria-hidden="true" onClick={toggleDrawerWishlist('right', true)}></i>
                        <span className='wish_length '>{wishList.length}</span>
                        {wishList.length ? 
                        <Drawer
                         anchor={'right'}
                         open={wishlistState['right']}
                         onClose={toggleDrawerWishlist('right', false)}
                        >
                        <Wish wish={wishList}/>  
                        </Drawer>
                        :
                        <></>
                        }
                        </>
                        </li>

                        <li>
                        <i className="fa fa-cart-plus icon cart_header" aria-hidden="true" onClick={toggleDrawer('right', true)}></i>
                        <span className='cart_length '>{cart.length}</span>
                        {cart.length?
                            <Drawer
                         anchor={'right'}
                         open={state['right']}
                         onClose={toggleDrawer('right', false)}
                        >
                            <Cart/>
                        </Drawer>
                        :
                        <></>
                        }
                        </li>
                </ul>
            </div>

        </div>
    );
};

export default Search;