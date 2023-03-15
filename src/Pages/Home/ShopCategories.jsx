import React from 'react';
import '../../Style/ShopCategories.css'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";


const ShopCategories = () => {
    return (
        <div className='shop_categories_container'>
             <Swiper
        slidesPerView={3}
        spaceBetween={10}
        // pagination={{
        //   clickable: false,
        // }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide style={{height: '160px'}} className='categories_cart'>
            <img src="https://f8g8b9p5.rocketcdn.me/themes/greengrocery/wp-content/uploads/2022/05/042-fruit-80x80.png" alt="" />
            <h4>FRESH PRODUCE</h4>
        </SwiperSlide>
        <SwiperSlide  style={{height: '160px'}} className='categories_cart'>
        <img src="https://f8g8b9p5.rocketcdn.me/themes/greengrocery/wp-content/uploads/2022/05/005-eggs-basket-80x80.png" alt="" />   
            <h4>DAIRY & EGGS</h4>
        </SwiperSlide>
        <SwiperSlide  style={{height: '160px'}} className='categories_cart'>
            <img src="https://f8g8b9p5.rocketcdn.me/themes/greengrocery/wp-content/uploads/2022/05/045-ice-cream-cone-80x80.png" alt="" />
            <h4>FROZEN</h4>
        </SwiperSlide>
        <SwiperSlide  style={{height: '160px'}} className='categories_cart'>
            <img src="https://f8g8b9p5.rocketcdn.me/themes/greengrocery/wp-content/uploads/2022/05/041-bun-bread-80x80.png" alt="" />
            <h4>BAKERY</h4>
        </SwiperSlide>
        <SwiperSlide  style={{height: '160px'}} className='categories_cart'>
            <img src="https://f8g8b9p5.rocketcdn.me/themes/greengrocery/wp-content/uploads/2022/05/020-bread-80x80.png" alt="" />
            <h4>Bread</h4>
        </SwiperSlide>
        <SwiperSlide  style={{height: '160px'}} className='categories_cart'>
            <img src="https://f8g8b9p5.rocketcdn.me/themes/greengrocery/wp-content/uploads/2022/05/047-candies-80x80.png" alt="" />
         <h4>Candy</h4>
        </SwiperSlide>
        <SwiperSlide  style={{height: '160px'}} className='categories_cart'>
            <img src="https://f8g8b9p5.rocketcdn.me/themes/greengrocery/wp-content/uploads/2022/05/049-packet-80x80.png" alt="" />
            <h4>Snacks</h4>
        </SwiperSlide>
        <SwiperSlide  style={{height: '160px'}} className='categories_cart'>
            <img src="https://f8g8b9p5.rocketcdn.me/themes/greengrocery/wp-content/uploads/2022/05/022-tuna-can-80x80.png" alt="" />
            <h4>Meat & Seafoods</h4>
        </SwiperSlide>
        <SwiperSlide  style={{height: '160px'}} className='categories_cart'>
            <img src="https://f8g8b9p5.rocketcdn.me/themes/greengrocery/wp-content/uploads/2022/05/043-berries-80x80.png" alt="" />
            <h4>Organic Foods</h4>
        </SwiperSlide>

        <SwiperSlide className='categories_cart'  style={{height: '160px'}}>
            <img src="https://f8g8b9p5.rocketcdn.me/themes/greengrocery/wp-content/uploads/2022/05/037-coffee-pack-80x80.png" alt="" />
            <h4>Coffee</h4>
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default ShopCategories;