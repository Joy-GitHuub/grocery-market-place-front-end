import React from 'react';

const useShippingDetails = () => {
    const [shippingDetails, setShippingDetails] = React.useState(null);

    return { shippingDetails, setShippingDetails };
};

export default useShippingDetails;