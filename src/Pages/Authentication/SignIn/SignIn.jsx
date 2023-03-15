import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from './../../../Context/useAuth';


const SignIn = () => {



    const location = useLocation();
    const navigate = useNavigate();

    const emailRef = React.useRef(null);
    const {firebase} = useAuth();
    const {handleResetPassword, handleLoginUser} = firebase;

    const sendEmail = () => {
        const email = emailRef.current.value;
        handleResetPassword(email);
    }

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const loginInfo = {  email, password,};
        handleLoginUser(loginInfo, location, navigate);
    };


    return (
        <>
            <section className='sign_up_page_section'>
                <div className="sign_up_info_div">
                    <div className="sign_up_image_wrap">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZTKmyAs2TcnVnfF0qO4HPwBKVP6VorXa8nw&usqp=CAU" alt="" />
                    </div>
                    <div className="sign_up_header">
                    <h3>Please Sign In</h3>
                    </div>

                    <form onSubmit={handleSignIn}>
               <div className="sing_up_user_info_wrap">

                    <div className='user_password_wrap email_wrap'>
                <div className="user_email_wrap password_wrap">
                            <label htmlFor="email">Your Email</label>
                            <input ref={emailRef} type="email" name="email" id="email" placeholder='Enter Your Email ID....' required />
                        </div>
                    </div>

                    <div className="user_password_wrap">
                        <div className="user_email_wrap password_wrap">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" placeholder='Enter Your Password...'  minLength={6} required/>
                    </div>
                     </div>

                     <div className="forgetPassword">
                        <h5 onClick={sendEmail}>Forget Password ?</h5>
                     </div>
                </div>

                    <div className="already_account sing_in_page_extra">
                    <h6>By continuing, you agree to Your's Conditions of Use and  <Link to='/privacy'>Privacy Notice.</Link></h6>

                    <h5>Don't Have Any Account ? <Link to={'/user/Sign-Up'}>Please Create A New Account</Link> </h5>
                    </div>

                    <div className="user_sign_up_button">
               <input type="submit" value="Sign-In" className='sign_up_btn' />
                    </div>
                    </form>
               
                </div>
        </section>  
        </>
    );
};

export default SignIn;