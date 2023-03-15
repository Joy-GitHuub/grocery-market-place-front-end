import React from 'react';
import ShopCategories from './ShopCategories';
import '../../Style/Categories.css'
import CategoriesNav from './CategoriesNav';
import Poster1 from './Poster1';



const Categories = () => {
    return (
        <div className='categories_show_container'>
            <div className="menu_bar">
                <CategoriesNav/>
            </div>
            <div className="slider_bar">
                <h1>Shop Categories</h1>
                <ShopCategories/>
                <Poster1/>
            </div>
        </div>
    );
};

export default Categories;