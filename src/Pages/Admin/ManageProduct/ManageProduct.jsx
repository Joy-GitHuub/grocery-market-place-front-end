import { Pagination, Stack } from '@mui/material';
import React from 'react';
import './ManageProduct.css';
import ManageProductCard from './ManageProductCard/ManageProductCard';


const ManageProduct = () => {

    const [products, setProducts] = React.useState([]); 
    const [productLength, setProductLength] = React.useState([]);
    const [pageCount , setPageCount] = React.useState(1);



    React.useEffect(() => {
        const url = `https://market-place-server-site.vercel.app/api/v1/product?sort=-createdAt&page=${pageCount}&limit=12`;
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            if (data.statusbar) {
                setProducts(data.data)
            }
        })
    } , [pageCount]);


    React.useEffect(() => {
        const url = `https://market-place-server-site.vercel.app/api/v1/product`;
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            if (data.statusbar) {
                setProductLength(data.data)
            }
        })
    } , [pageCount]);
    
    const paginationNum = Math.ceil(productLength.length / 12);

    const handlePagination = (event, value) => {
        setPageCount(value);
    };

    return (
        <section className='admin_manage_product_section'>
            <div className="admin_manage_product_header">
                <h3>Manage Product</h3>
            </div>


           {products.length && 
           <section className="admin_manage_product_container">
                {
                    products.map((product,index) => <ManageProductCard
                    key={index}
                    product={product}
                    ></ManageProductCard> )
                }
            </section>}

                <div className="pagination_position_stop">
                <div className="pagination_section">
                <Stack spacing={2}>
                <Pagination count={paginationNum} color="primary" onChange={handlePagination} />
                </Stack>
                </div>
                </div>


        </section>
    );
};

export default ManageProduct;