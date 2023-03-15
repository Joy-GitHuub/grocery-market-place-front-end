import { useEffect, useState } from 'react';

const useDiscountProduct = () => {
    const [discountProducts, setDiscountProducts] = useState([])
    useEffect(() => {
        const url = `https://market-place-server-site.vercel.app/api/v1/product?sort=-discountPrice&page=1&limit=6`
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                setDiscountProducts(data);
            })
    }, []);

    return { discountProducts };
};

export default useDiscountProduct;