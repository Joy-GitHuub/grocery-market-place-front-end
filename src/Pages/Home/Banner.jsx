import React from 'react';
import ImageSlider from '../Shared/ImageSlider';
import '../../Style/Banner.css'


const Banner = () => {

    const slides = [
        {url: "https://demo.casethemes.net/organio/wp-content/uploads/2021/07/h7-bg-slider3.jpg", title: 'demo2'},
        { url: "https://f8g8b9p5.rocketcdn.me/themes/greengrocery/wp-content/uploads/2022/05/banner-1350-12.png", title: "beach" },
        { url: "https://ninetheme.com/themes/greengrocery/wp-content/uploads/2022/04/30.png", title: "boat5" },
        { url: "https://k4j3j2s7.rocketcdn.me/bacola/wp-content/uploads/2021/04/slider-image-1.jpg", title: "beach3" },
        { url: "https://k4j3j2s7.rocketcdn.me/bacola/wp-content/uploads/2021/04/slider-image-2.jpg", title: "boat1" },
        {url: "https://k4j3j2s7.rocketcdn.me/bacola/wp-content/uploads/2021/05/slider-3.jpg", title: "Fruit"},
        {url: "https://k4j3j2s7.rocketcdn.me/bacola/wp-content/uploads/2021/05/slider-image-3.jpg", title: 'JOy'},
        {url: "https://k4j3j2s7.rocketcdn.me/bacola/wp-content/uploads/2021/05/slider-image-5.jpg", title: 'Al'},
        {url: "https://demo.casethemes.net/organio/wp-content/uploads/2021/07/h7-bg-slider2.jpg", title: 'demo'}
    ];

    const containerStyles = {
        width: "1000px",
        height: "380px",
        // margin: "0 auto",
      };

    return (
   <div className='banner-container'>
    <div className="left-category-side">
        <div className='side-image'>
        <img src="https://k4j3j2s7.rocketcdn.me/bacola/wp-content/uploads/2021/05/sidebar-banner.gif" alt="" />
        </div>
    </div>

    <div style={containerStyles} className='right-side-slider'>
        <ImageSlider slides={slides} />
      </div>
   </div>
    );
};

export default Banner;