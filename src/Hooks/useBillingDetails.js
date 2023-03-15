import React from 'react';

const useBillingDetails = () => {
    const [billingDetails, setBillingDetails] = React.useState(null);

    return { billingDetails, setBillingDetails };
};

export default useBillingDetails;