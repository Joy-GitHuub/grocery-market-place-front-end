import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Privacy from './Pages/Privacy/Privacy';
import Page from './Pages/ProductDetails/Page';
import ShopContainer from './Pages/Shop/ShopContainer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CheckOut from './Pages/ViewCart/CheckOut';
import Proceed from './Pages/ViewCart/Proceed';
import SignUp from './Pages/Authentication/SignUp/SignUp';
import SignIn from './Pages/Authentication/SignIn/SignIn';
import Private from './Pages/Authentication/Firebase/Private/Private';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyReview from './Pages/Dashboard/MyReview/MyReview';
import MyOrder from './Pages/Dashboard/MyOrder/MyOrder';
import ViewOrder from './Pages/Dashboard/ViewOrder/ViewOrder';
import Payment from './Pages/Dashboard/Payment/Payment';
import ManageProfile from './Pages/Admin/ManageProfile/ManageProfile';
import ManageOrder from './Pages/Admin/ManageOrder/ManageOrder';
import ManageAddProduct from './Pages/Admin/ManageAddProduct/ManageAddProduct';
import ManageProduct from './Pages/Admin/ManageProduct/ManageProduct';
import ManageProductUpdate from './Pages/Admin/ManageProductUpdate/ManageProductUpdate';

function App() {



  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
  } , [])
  
  React.useEffect(() => {

    const date = new Date().toDateString();
/*     const tomorrow = new Date();
    tomorrow.setDate(new Date().getDate()+1)
    console.log(tomorrow.toDateString()); */
    const visit = {
      date:date,
      count: 1,
    }
    const url = `https://market-place-server-site.vercel.app/api/v1/visit`;
    fetch(url, {
      method: 'PUT',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(visit)
    })
  } , [])



  
  return (
    <div>
   { loading 
   ?
   <div className='loading-gif'>
          <div className="loader">
          {/* <span className="span"></span>
          <span className="span"></span>
          <span className="span"></span>
          <span className="span"></span> */}
        <img src="https://doctors-portal-react.firebaseapp.com/static/media/Preloader.3e54c692.gif" alt="" />
        </div>
   </div>:
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={
          <Private>
            <ShopContainer />
            </Private>
        } />

<Route exact path="/dashboard" element={<Private><Dashboard/></Private>}>
            {/* <Route index element={<Welcome />} /> */}
            <Route  index element={<MyOrder />} />
            <Route  path='myOrder' element={<MyOrder />} />
            <Route path="customerReview" element={<MyReview/>} />
            <Route path="viewOrder" element={<ViewOrder/>} />
            <Route path="paymentMethod" element={<Payment/>} />
            <Route path="manageProfile" element={<ManageProfile/>} />
            <Route path="manageOrders" element={<ManageOrder/>} />
            <Route path="manageAddProducts" element={<ManageAddProduct/>} />
            <Route path="manageProducts" element={<ManageProduct/>} />
            <Route path="manageProductUpdate" element={<ManageProductUpdate/>} />
            <Route path="adminAnalytics" element={<ManageProductUpdate/>} />
            {/* <Route path="makeAdmin/:productID" element={<Hello/>} /> */}
        </Route>

        <Route path="/proceed" element={<Private><Proceed /></Private>}/>
        <Route path="/user/Sign-Up" element={<SignUp />} />
        <Route path="/user/Sign-In" element={<SignIn />} />
        <Route path='/productDetails/:productId' element={<Page></Page>}></Route>
        <Route path="/privacy" element={<Privacy />} />



        <Route
            path="/checkout" element={<Private><CheckOut /></Private>}
          />



      </Routes>}


                  <ToastContainer
                  position="bottom-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                  />
    </div>
  );
}

export default App;
