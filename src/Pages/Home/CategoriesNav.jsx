import React from 'react';
import '../../Style/CategoriesNav.css';

const image1 = 'https://f8g8b9p5.rocketcdn.me/themes/greengrocery/wp-content/uploads/2022/05/005-eggs-basket-80x80.png';
const image2= 'https://f8g8b9p5.rocketcdn.me/themes/greengrocery/wp-content/uploads/2022/05/042-fruit-80x80.png';
const image3 = 'https://f8g8b9p5.rocketcdn.me/themes/greengrocery/wp-content/uploads/2022/05/045-ice-cream-cone-80x80.png';
const image4 = 'https://f8g8b9p5.rocketcdn.me/themes/greengrocery/wp-content/uploads/2022/05/041-bun-bread-80x80.png';
const image5= 'https://f8g8b9p5.rocketcdn.me/themes/greengrocery/wp-content/uploads/2022/05/020-bread-80x80.png';
const image6 = 'https://f8g8b9p5.rocketcdn.me/themes/greengrocery/wp-content/uploads/2022/05/047-candies-80x80.png';
const image7= 'https://f8g8b9p5.rocketcdn.me/themes/greengrocery/wp-content/uploads/2022/05/049-packet-80x80.png';
const image8= 'https://f8g8b9p5.rocketcdn.me/themes/greengrocery/wp-content/uploads/2022/05/022-tuna-can-80x80.png';
const image9 = 'https://f8g8b9p5.rocketcdn.me/themes/greengrocery/wp-content/uploads/2022/05/043-berries-80x80.png';
const image10 = 'https://f8g8b9p5.rocketcdn.me/themes/greengrocery/wp-content/uploads/2022/05/037-coffee-pack-80x80.png';

const CategoriesNav = () => {
    return (
        <div className='categories_nav_container'>
            <nav>
                <ul>
                    <li>
                        <a href="/">
                        <div>
                            <img src={image2} alt="" />
                            <h4>Fresh Produce</h4>
                        </div>
                        <dir>{`>`}</dir>
                        </a>
                        <ul className='submenu'>
                            <li><a href="/">Fresh Herbs</a></li>
                            <li><a href="/"> Fresh Vegetables</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="/">
                        <div>
                            <img src={image1} alt="" />
                            <h4>Dairy & Eggs</h4>
                        </div>
                        <dir>{`>`}</dir>
                        </a>
                        <ul className='submenu'>
                            <li><a href="/">Cheese</a></li>
                            <li><a href="/">Chocolate</a></li>
                            <li><a href="/">Egges</a></li>
                            <li><a href="/">Milk</a></li>
                            <li><a href="/">Yogurt</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="/">
                        <div>
                            <img src={image3} alt="" />
                            <h4>Frozen</h4>
                        </div>
                        <dir>{`>`}</dir>
                        </a>
                        <ul className='submenu'>
                            <li><a href="/">Frozen Breakfast</a></li>
                            <li><a href="/">Frozen Produce</a></li>
                            <li><a href="/">Frozen Snacks</a></li>
                            <li><a href="/">Ice Cream</a></li>
                            <li><a href="/">Pizza & Pasta</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="/">
                        <div>
                            <img src={image4} alt="" />
                            <h4>Bakery</h4>
                        </div>
                        <dir>{`>`}</dir>
                        </a>
                        <ul className='submenu'>
                            <li><a href="/">Fresh Bakery</a></li>
                            <li><a href="/">Muffins & Donuts</a></li>
                            <li><a href="/">Rolls & Buns</a></li>
                            <li><a href="/">Rolls & Buns</a></li>
                            <li><a href="/">Tortillas</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="/">
                        <div>
                            <img src={image5} alt="" />
                            <h4>Bread</h4>
                        </div>
                        <dir>{`>`}</dir>
                        </a>
                        <ul className='submenu'>
                            <li><a href="/">Custom Cakes</a></li>
                            <li><a href="/">Pics</a></li>
                            <li><a href="/">Snack Cakes</a></li>
                            <li><a href="/">Crim Cakes</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="/">
                        <div>
                            <img src={image6} alt="" />
                            <h4>Candy</h4>
                        </div>
                        <dir>{`>`}</dir>
                        </a>
                        <ul className='submenu'>
                            <li><a href="/">Gum</a></li>
                            <li><a href="/">Hard Candy</a></li>
                            <li><a href="/">Sweet</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="/">
                        <div>
                            <img src={image7} alt="" />
                            <h4>Snacks</h4>
                        </div>
                        <dir>{`>`}</dir>
                        </a>
                        <ul className='submenu'>
                            <li><a href="/">Chips</a></li>
                            <li><a href="/">Cookies</a></li>
                            <li><a href="/">Crackers</a></li>
                            <li><a href="/">Granola Bars</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="/">
                        <div>
                            <img src={image8} alt="" />
                            <h4>Meat & Seafoods</h4>
                        </div>
                        <dir>{`>`}</dir>
                        </a>
                        <ul className='submenu'>
                            <li><a href="/">Fresh Seafoods</a></li>
                            <li><a href="/">Organic Seafoods</a></li>
                            <li><a href="/">Plant-Based</a></li>
                            <li><a href="/">Shellfishly Delicious</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="/">
                        <div>
                            <img src={image9} alt="" />
                            <h4>Meat & Seafoods</h4>
                        </div>
                        <dir>{`>`}</dir>
                        </a>
                        {/* <ul className='submenu'>
                            <li><a href="/">Fresh Seafoods</a></li>
                            <li><a href="/">Organic Seafoods</a></li>
                            <li><a href="/">Plant-Based</a></li>
                            <li><a href="/">Shellfishly Delicious</a></li>
                        </ul> */}
                    </li>
                    <li>
                        <a href="/">
                        <div>
                            <img src={image10} alt="" />
                            <h4>Coffee</h4>
                        </div>
                        <dir>{`>`}</dir>
                        </a>
                        <ul className='submenu'>
                            <li><a href="/">Coffee Creamers</a></li>
                            <li><a href="/">Coffee Pods</a></li>
                            <li><a href="/">Cold Brew Coffees</a></li>
                            <li><a href="/">Ground Coffee</a></li>
                            <li><a href="/">Instant Coffee</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default CategoriesNav;