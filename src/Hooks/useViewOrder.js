import React from 'react';

const useViewOrder = () => {
    const [viewOrderId, setViewOrderId] = React.useState('');

    return { viewOrderId, setViewOrderId }
};

export default useViewOrder;