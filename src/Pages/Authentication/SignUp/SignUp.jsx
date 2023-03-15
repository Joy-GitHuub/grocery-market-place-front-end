import React from 'react';
import { toast } from 'react-toastify';
import './SignUp.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../Shared/Navbar';
import useAuth from './../../../Context/useAuth';

const SignUp = () => {


    const {firebase} = useAuth();
    const {handleCreateUser} = firebase;
    
  const location = useLocation();
  const navigate = useNavigate();

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const name = `${firstName} ${lastName}`
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        if (password !== confirmPassword ) {
            return toast.error('Confirm Password Not Ok..', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
        const registerInfo = {name, email, password,firstName, lastName, confirmPassword};
        handleCreateUser(registerInfo, location, navigate);
    };


    return (
<>
<section className='sign_up_page_section'>
            <div className="sign_up_info_div">
                    <div className="sign_up_image_wrap">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZTKmyAs2TcnVnfF0qO4HPwBKVP6VorXa8nw&usqp=CAU" alt="" />
                    </div>
                <div className="sign_up_header">
                    <h3>Please Sign Up</h3>
                </div>

               <form onSubmit={handleSignUp}>
               <div className="sing_up_user_info_wrap">
                        <div className="user_name_wrap">
                        <div className="user_firstName_wrap label_input_wrap">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name="firstName" id="firstName" placeholder='Enter Your First Name...'  required/>
                        </div>
                         <div className="user_lastName_wrap label_input_wrap">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name="lastName" id="lastName" placeholder='Enter Your Last Name...'  required />
                        </div>
                        </div>

                        <div className="user_email_wrap password_wrap">
                            <label htmlFor="email">Your Email</label>
                            <input type="email" name="email" id="email" placeholder='Enter Your Email ID....' required />
                        </div>

                        <div className="user_name_wrap password_wrap">
                        <div className="user_firstName_wrap label_input_wrap">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" placeholder='Enter Your Password...'  required/>
                    </div>
                    <div className="user_lastName_wrap label_input_wrap">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" name="confirmPassword" id="confirmPassword" placeholder='Enter Your Confirm Password...'  required />
                    </div>
                        </div>
                </div>

                <div className="already_account">
                    <h6>By continuing, you agree to Your's Conditions of Use and  <Link to='/privacy'>Privacy Notice.</Link></h6>

                    <h5>Already Have An Account ? <Link to={'/user/Sign-In'}>Please Sign-In Your Account</Link> </h5>
                </div>

               <div className="user_sign_up_button">
               <input type="submit" value="Sign-Up" className='sign_up_btn' />
               </div>
               </form>
               
            </div>
        </section>
</>
    );
};

export default SignUp;