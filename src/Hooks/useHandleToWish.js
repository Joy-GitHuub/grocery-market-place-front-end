
import { useState } from 'react';

const useHandleToWish = () => {
    const [wishList, setWishList] = useState([]);

    const handleWishList = (product) => {
        if ((!wishList.includes(product))) {
            const newWishList = [...wishList, product];
            setWishList(newWishList);
        }
    };
    return { wishList, setWishList, handleWishList };
};

export default useHandleToWish;