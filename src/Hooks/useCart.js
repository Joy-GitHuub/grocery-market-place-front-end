import { useState, useEffect } from 'react';

const useCart = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
    }, [cart.length])
    return [cart, setCart]
};

export default useCart;