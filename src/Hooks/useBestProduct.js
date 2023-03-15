import { useState, useEffect } from 'react';

const useBestProduct = () => {

    const [bestSellProducts, setBestSellProducts] = useState([])
    useEffect(() => {
        const url = `https://market-place-server-site.vercel.app/api/v1/product/?sort=-order&page=1&limit=6`
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                setBestSellProducts(data);
            })
    }, []);

    return { bestSellProducts };

};

export default useBestProduct;