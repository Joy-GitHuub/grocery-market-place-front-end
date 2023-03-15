import React, {useState, useEffect} from 'react';
import './Style/ShopBanner.css';
import ProductCard from '../Shared/ProductCard';
import Footer from '../Shared/Footer';
import useHandleToCart from '../../Hooks/useHandleToCart';


const imageBanner = `https://ninetheme.com/themes/greengrocery/wp-content/uploads/2022/05/banner-1350-12.png`;

const ShopBanner = () => {


    const {handleAddToCart, isSuccess, setIsSuccess} = useHandleToCart()

    const [products, setProducts] = useState([]);
    const [sortProduct, setSortProducts] = useState('-price');
    const [limitProduct, setLimitProduct] = useState(10)
    const [displayProduct, setDisplayProduct] = useState([]);
    const [priceFilter, setPriceFilter] = useState(100)





    useEffect(() => {
        // https://market-place-server-site.vercel.app/api/v1/product?price[lte]=6
        const url = `https://market-place-server-site.vercel.app/api/v1/product?sort=${sortProduct}&page=1&limit=${limitProduct}&price[lte]=${priceFilter}`
        fetch(url)
        .then((res ) => res.json())
        .then((result) => {
            setProducts(result)
            setDisplayProduct(result.data)
        })
    } , [sortProduct, limitProduct, priceFilter]);

    const {data} = products;


    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProducts = data.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProduct(matchedProducts);
    }

    const handleOnChange = (e) => {
        e.preventDefault()
       setLimitProduct(e.target.value);
    }


    const handleInputRange = (e) => {
        setPriceFilter(e.target.value);
    }



    return (
        <>
        {
            data &&
            <section className='banner_section_image'>
            <div className='shop_banner_section_image_wrap'>
                <img src={imageBanner} alt="" />
            </div>

            <section className="filter_and_product_section">
                <div className="filter_section">
                    <div className="search_product_section">
                        <input
                         onChange={handleSearch}
                        type="text" 
                        placeholder='Search Your Product...'
                        className='search_input_box' />
                        <button>Search</button>
                    </div>

            <div className="price_ranger_wrapper">
                 <div className="field">
          <span style={{marginRight: '20px', marginBottom: '50px'}}>Price</span>
          <input type="number" className="input-max" value={priceFilter}/>
        </div>
            <div className="range-input">
                <input type="range" name="rangeInput" min={0} max={100}  
                defaultValue={priceFilter}
                onChange={handleInputRange}
                className="slider"
                / >
           </div>
              </div>
                </div>

                <div className="product_show_section">
                    <div className="filter_by_category_section">
                        <div className='result_find'>
                            <h5>SHOWING ALL {displayProduct.length} RESULTS</h5>
                        </div>
                        <div className='product_serial_sort_and_limit'>
                            <div className="sort_serial">
                                <select
                                name="laptops"
                                id="laptop"
                                onChange={(e) => setSortProducts(e.target.value)}
                                >
                            <option value="-createdAt">SORT BY LATEST</option>
                            <option value="price">SORT BY PRICE: LOW TO HIGH</option>
                            <option selected value="-price">SORT BY PRICE: HIGH TO LOW</option>
                            <option value="-view">SORT BY POPULARITY</option>
                            <option value="-discountPrice">SORT BY DISCOUNT</option>
                    </select>
                            </div>
                            <div className='limit_load'>
                                <div>
                                    <h3>SHOW</h3>
                                    <form onChange={handleOnChange}>
                                    <input type="radio" id="10" name="limit" value="10" />
                                    <label htmlFor="10">10</label>
                                    <input type="radio" id="15" name="limit" value="15" />
                                    <label htmlFor="15">15</label>
                                    <input type="radio" id="20" name="limit" value="20" />
                                    <label htmlFor="20">20</label>
                                    <input type="radio" id="25" name="limit" value="25" />
                                    <label htmlFor="25">25</label>
                                    <input type="radio" id="all" name="limit" value="all" />
                                    <label htmlFor="all">All</label>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                <div className="product_show_wrap">
                {
                        displayProduct.map((product) => <ProductCard
                        handleAddToCart={handleAddToCart} 
                        isSuccess={isSuccess}
                        setIsSuccess={setIsSuccess}
                        key={product._id}
                        product={product}
                        />)
                 }
                </div>
                </div>
            </section>

            <Footer/>
        </section>
        }
        </>
    );
};

export default ShopBanner;