import { useState, useEffect } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const url = `https://market-place-server-site.vercel.app/api/v1/product`;
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                setProducts(data);
            })
    }, []);

    return { products };
};

export default useProducts;