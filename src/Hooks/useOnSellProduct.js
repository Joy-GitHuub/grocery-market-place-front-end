import { useState, useEffect } from 'react';

const useOnSellProduct = () => {
    const [onSellProduct, setOnSellProduct] = useState([]);

    useEffect(() => {
        const url = `https://market-place-server-site.vercel.app/api/v1/product/?sort=-stock&page=1&limit=6`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setOnSellProduct(data)
            })
    }, []);

    return { onSellProduct };
};

export default useOnSellProduct;