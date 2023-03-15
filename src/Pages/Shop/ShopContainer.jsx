import React from 'react';
import Header from '../Home/Header';
import Navbar from '../Shared/Navbar';
import Search from '../Shared/Search';
import ShopBanner from './ShopBanner';

const ShopContainer = () => {
    return (
        <section className='Shop_Page_Full_Section'>
            <Header/>
            <Search/>
            <Navbar/>
            <ShopBanner/>

        </section>
    );
};

export default ShopContainer;