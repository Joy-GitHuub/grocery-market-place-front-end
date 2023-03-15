import React, {useState} from 'react';
import Banner from './Banner';
import Categories from './Categories';
import Header from './Header';
import Poster from './Poster';
import CountDown from '../Shared/CountDown';
import Navbar from '../Shared/Navbar';
import Search from '../Shared/Search';
import Footer from '../Shared/Footer';
import Popup from '../Shared/Popup';
import Shop from './Shop';
import ManeCategories from './ManeCategories';
import Discount from './Discount';
import GetEmail from './GetEmail';



const Home = () => {


    const [popup, setPopup] = useState(false);


    
    // useEffect(() => {
    //     if (!user?.email) {
    //     setTimeout(() => {
    //         setPopup(true);
    //     }, 5000);
    // }
    // } , [])

    return (
         <div>
             
            {
                popup && 
                <Popup setPopup={setPopup}/>
            }
            {!popup &&
                <div>
                 <Header/>
                <Search/>
                <Navbar/>
                <Banner/>
                <Poster/>
                <CountDown/>
                <Categories />
                <Shop />
                <Discount/>
                <ManeCategories/>
                <GetEmail/>
                <Footer/>
                </div>
            }
        </div>
    );
};

export default Home;