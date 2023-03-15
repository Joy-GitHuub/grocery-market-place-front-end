import React from 'react';
import Header from '../Home/Header';
import Navbar from '../Shared/Navbar';
import Search from '../Shared/Search';
import ProductDetails from './ProductDetails';
import Footer from './../Shared/Footer';

const Page = () => {
    return (
        <div>
        <Header/>
        <Search/>
        <Navbar/>
        <ProductDetails/>
        <Footer/>
        </div>
    );
};

export default Page;