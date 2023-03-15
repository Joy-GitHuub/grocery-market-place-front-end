import React from 'react';
import '../../Style/Discount.css'

const Discount = () => {
    return (
        <section className='extra_part_container'>
            <div className="promotion_discount_product">
                <h3>30% discount on promotional products!</h3>
            </div>
            <div className="extra_discount_product">
                <h3>Extra 10% discount for members!</h3>
            </div>
        </section>
    );
};

export default Discount;