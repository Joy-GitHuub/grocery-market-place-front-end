import React from 'react';

const useOrderProduct = () => {
    const [orderProduct, setOrderProduct] = React.useState([]);

    return { orderProduct, setOrderProduct };
};

export default useOrderProduct;