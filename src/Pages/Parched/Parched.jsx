import React from 'react';
import './Parched.css'
import useAuth from './../../Context/useAuth';
import useDate from './../../Hooks/useDate';
import useOrderPost from './../../Hooks/Fetch_Hooks/useOrderPost';
import { useNavigate } from 'react-router-dom';

const Parched = () => {

    const {order,billDetail, firebase, shippingDetail, carts} = useAuth()
    const {orderProduct} = order;
    const [cart, setCart] = carts;


    const {user} = firebase;
    const {billingDetails, setBillingDetails} = billDetail;
    const {shippingDetails, setShippingDetails } = shippingDetail;
    
    let subTotal = 0;
    for (const product of orderProduct) {
        const discount = ((product.price /100 ) * product.discountPrice)
        const newPrice = (product.price- discount).toFixed(2);
        subTotal = subTotal + (newPrice * product.quantity)
    };
    let shippingCost =parseFloat(((subTotal/ 100) * 15).toFixed(2))
    let totalPrice = parseFloat((subTotal + shippingCost).toFixed(2));

    const [toggle, setToggle] = React.useState(false);

    const handleCheck = (e) => {
        setToggle(e.target.checked);
    };


    const [bankTransfer, setBankTransfer] = React.useState(true);
    const [checkPayment, setCheckPayment] = React.useState(false);
    const [cashOnDelivery, setCashOnDelivery] = React.useState(false);

    const handleBankTransfer = (e) => {
        if(e.target.checked){
            setBankTransfer(true);
            setCheckPayment(false);
            setCashOnDelivery(false);
        }
    };
    const handleCheckPayment = (e) => {
        if(e.target.checked){
            setBankTransfer(false);
            setCheckPayment(true);
            setCashOnDelivery(false);
        }
    };

    const handleCashPayment = (e) => {
        if(e.target.checked){
            setBankTransfer(false);
            setCheckPayment(false);
            setCashOnDelivery(true);
        }
    };

    const {dayFour, dayFourMonth, daySeven, daySevenMonth} = useDate();
    const shippingDayFast = `${dayFourMonth} ${dayFour} - ${daySevenMonth} ${daySeven}`




    const handleBillingAddress = (event) => {
        event.preventDefault();
     const form = event.target;
     const firstName = form.firstName.value;
     const lastName = form.lastName.value;
     const userEmail = form.email.value;
     const phone = form.phone.value;
     const city = form.city.value;
     const streetAddress = form.streetAddress.value;
     const town = form.town.value;
     const zipCode = form.zipCode.value;
     const orderDay = new Date().toDateString();
     const billingAddress = {firstName, lastName, userEmail, phone, city, streetAddress, town, zipCode, orderDay, shippingDayFast}
    setBillingDetails(billingAddress);
    setShippingDetails(billingAddress)
    };

    const handleShippingAddress = (event) => {
    event.preventDefault();
     const form = event.target;
     const firstName = form.firstName.value;
     const lastName = form.lastName.value;
     const userEmail = form.email.value;
     const phone = form.phone.value;
     const city = form.city.value;
     const streetAddress = form.streetAddress.value;
     const town = form.town.value;
     const zipCode = form.zipCode.value;
     const orderDay = new Date().toDateString();
     const shippingAddress = {firstName, lastName, userEmail, phone, city, streetAddress, town, zipCode, orderDay, shippingDayFast}
    setShippingDetails(shippingAddress);
    };

    const {displayName} = user;
    const name = displayName?.split(" ");


    const {handleOrderPost} = useOrderPost();

    const orderCart = [];
    orderProduct?.forEach(product => {
        const pro = {
            _id: product._id,
            name: product.name,
            price: product.price,
            discountPrice: product.discountPrice,
            orderStatus: product.orderStatus,
            quantity: product.quantity,
        };
        orderCart.push(pro);
    }); 


    const navigate = useNavigate();

    const random = Math.floor(Math.random() * 10000);
    const date =new Date().toDateString();
    const handleUserOrder = (e) => {
        e.preventDefault();
        if (billingDetails) {
            const myOrder = {
                orderID: random,
                userInfo: [{userName: user.displayName, userEmail: user.email}],
                orderProduct: orderCart,
                billingAddress: billingDetails,
                shippingAddress: shippingDetails,
                date: date,
                paymentMethods: {cashOnDelivery, checkPayment, bankTransfer},
                totalPrice: totalPrice,
            };
            handleOrderPost(myOrder);
            navigate(`/`)
            setCart([]);   
        }else{
            alert('Provide Billing Details')
        }

    };



    
    return (
        <section className='perched_page_section'>
            <div className="user_delivery_details_container">
                <div className="details_wrap">
                    <h3>BILLING DETAILS</h3>               
                    <form onSubmit={handleBillingAddress} autoComplete='on'>

                    <div className="input_fields">
                    <label htmlFor="firstName">FIRST NAME *</label>
                    <input type="text" name="firstName" id="firstName" required defaultValue={name[0]} />
                    </div>

                    <div className="input_fields">
                    <label htmlFor="lastName">LAST NAME *</label>
                    <input type="text" name="lastName" id="lastName"  defaultValue={name[1]} />
                    </div>

                    <div className="input_fields">
                    <label htmlFor="email">EMAIL ADDRESS*</label>
                    <input type="email" name="email" id="email"  defaultValue={user?.email} />
                    </div>

                    <div className="input_fields">
                    <label htmlFor="phone">MOBILE NUMBER *</label>
                    <input type="text" name="phone" id="phone" required />
                    </div>

                <div className='input_fields'>
                <label htmlFor="province">PROVINCE *</label>
                    <select name="city" id="province">
                    <option value="Dhaka" selected>DHAKA</option>
                    <option value="Chittagong">CHITTAGONG</option>
                    <option value="Barishal">BARISHAL</option>
                    <option value="Khulna">KHULNA</option>
                    <option value="Rajshahi">RAJSHAHI</option>
                    <option value="Rangpur">RANGPUR</option>
                    <option value="Mymensingh">MYMENSINGH</option>
                    <option value="Sylhet">SYLHET</option>
                    </select>
                </div>

                <div className="input_fields">
                <label htmlFor="streetAddress">STATE ADDRESS *</label>
                <input type="text" name="streetAddress" id="streetAddress" required />
                </div>

                <div className="input_fields">
                <label htmlFor="town">TOWN / CITY *</label>
                    <input type="text" name="town" id="town"  required/>
                </div>

                    <div className="input_fields">
                    <label htmlFor="zipCode">ZIP CODE *</label>
                    <input type="text" name="zipCode" id="zipCode" />
                    </div>
                    <input type="submit" value="SUBMIT" className='submit_form'/>
                    </form>
                </div>

                <div>
                <div className='product_shipping_details_wrap'>
                    <input type="checkbox" name="shipping" id="shipping" className='check' onClick={handleCheck} />
                    <label htmlFor="shipping">Ship to a different address?</label>
                </div>

               {toggle && <div className="details_wrap">
                    <h3>DELIVERY ADDRESS DETAILS</h3>               
                    <form onSubmit={handleShippingAddress} autoComplete='off'>

                    <div className="input_fields">
                    <label htmlFor="firstName">FIRST NAME *</label>
                    <input type="text" name="firstName" id="firstName" required />
                    </div>

                    <div className="input_fields">
                    <label htmlFor="lastName">LAST NAME *</label>
                    <input type="text" name="lastName" id="lastName" />
                    </div>

                    <div className="input_fields">
                    <label htmlFor="email">EMAIL ADDRESS*</label>
                    <input type="email" name="email" id="email" required />
                    </div>

                    <div className="input_fields">
                    <label htmlFor="phone">MOBILE NUMBER *</label>
                    <input type="text" name="phone" id="phone" required />
                    </div>

                <div className='input_fields'>
                <label htmlFor="province">PROVINCE *</label>
                    <select name="city" id="province">
                    <option value="Dhaka" selected>DHAKA</option>
                    <option value="Chittagong">CHITTAGONG</option>
                    <option value="Barishal">BARISHAL</option>
                    <option value="Khulna">KHULNA</option>
                    <option value="Rajshahi">RAJSHAHI</option>
                    <option value="Rangpur">RANGPUR</option>
                    <option value="Mymensingh">MYMENSINGH</option>
                    <option value="Sylhet">SYLHET</option>
                    </select>
                </div>

                <div className="input_fields">
                <label htmlFor="streetAddress">STATE ADDRESS *</label>
                <input type="text" name="streetAddress" id="streetAddress" required />
                </div>

                <div className="input_fields">
                <label htmlFor="town">TOWN / CITY *</label>
                    <input type="text" name="town" id="town"  required/>
                </div>

                    <div className="input_fields">
                    <label htmlFor="zipCode">ZIP CODE *</label>
                    <input type="text" name="zipCode" id="zipCode" />
                    </div>
                    <input type="submit" value="SUBMIT" className='submit_form'/>
                    </form>
                </div>}

                <div className="my_order_shipping_price_payment_container">
                    <h2 className='your_order'>Your Order</h2>
                    {
                        orderProduct?.map((order, index) => {
                           return <div key={index}>
                            <div className="order-image-name-quantity-wrap">
                                <div className='order_image_name_quantity'>
                                <img src={order?.imageURL[0]} alt="" />
                                <h6>{order?.name} × {order?.quantity}</h6>
                                </div>
                                <div className="order_per_order_price">
                                    <h6>$ {(((order.price) -((order.price / 100)* order.discountPrice)) * (order.quantity)).toFixed(2)}</h6>
                                </div>
                            </div>
                            </div>
                        })
                    }

                   <form onSubmit={handleUserOrder}>
                   <div className="order_subtotal_sum">
                        <h4>Subtotal</h4>
                        <h4>$ {(subTotal).toFixed(2)}</h4>
                    </div>
                    <div className="order_shipping_sum">
                        <h4>Shipping Cost</h4>
                        <h4>$ {(shippingCost).toFixed(2)}</h4>
                    </div>
                    <div className="order_total_sum">
                        <h4>Total Cost</h4>
                        <h4>$ {(totalPrice).toFixed(2)}</h4>
                    </div>



                    <div className="order_payment_methods_select">
                    
                    <div className="payment_methods_single_option">
                    <input 
                    onClick={handleBankTransfer}
                    type="radio" name="payment" id="bank" value={"Direct bank transfer"} defaultChecked/>
                    <label htmlFor="bank">Direct bank transfer</label>
                    {bankTransfer&&
                        <div className='payment_rule'>
                        <h5>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</h5>
                    </div>}
                    </div>

                    <div className="payment_methods_single_option">
                    <input type="radio" name="payment" id="check" value={"Check Payment"} onClick={handleCheckPayment}/>
                    <label htmlFor="check">Check Payment</label>

                   {checkPayment &&
                    <div className='payment_rule'>
                        <h5>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</h5>
                    </div>}
                    </div>


                    <div className="payment_methods_single_option">
                    <input type="radio" name="payment" id="cash" value={"Cash On Delivery"} onClick={handleCashPayment}/>
                    <label htmlFor="cash">Cash On Delivery</label>

                    {cashOnDelivery&&
                     <div className="payment_rule">
                        <h5>Pay with cash upon delivery.</h5>
                    </div>
                    }
                    </div>

                    </div>

                    <div className="privacy_policy_order">
                        <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
                    </div>

                    <div className="terms_conditions">
                        <input type="checkbox" name="terms" id="terms" required/>
                        <label htmlFor="terms"> I HAVE READ AND AGREE TO THE WEBSITE <u>TERMS AND CONDITIONS *</u></label>
                    </div>

                    <input type="submit" value="SUBMIT" className='submit_form'/>
                    
                   </form>

                </div>
                </div>
            </div>
        </section>
    );
};

export default Parched;