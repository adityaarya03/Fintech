import React,{useState } from 'react'
import { NavLink,useNavigate  } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sentOtpFunction } from "../../services/Apis";
import "../../styles/mix.css"
const Login = () => {

  const [email,setEmail]=React.useState("");
  const navigate = useNavigate();


  // sendotp
  const sendOtp = async (e) => {
    e.preventDefault();

    if (email === "") {
        toast.error("Enter Your Email !")
    } else if (!email.includes("@")) {
        toast.error("Enter Valid Email !")
    } 
    else {
        const data = {
            email: email
        }

        const response = await sentOtpFunction(data);
        // console.log(response);
        if (response.status === 200) {
            navigate("/user/otp",{state:email})
        } else {
            toast.error(response.response.data.error);
        }
    }
}

  return (
    <div>
      <section>
        <div className='form_data'>
          <div className='form_heading'>
          <h1>Welcome To Finact, Log In</h1>
          <p>Hello, we are glad you are back, Please Login</p>
          </div>
          <form >
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input type="email" name='email' id='' onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Your Email' />
            </div>
            <button className='btn' onClick={sendOtp}>Login</button>
            <p>Don't have an account? <NavLink to='/register'>Sign Up</NavLink></p>
          </form>

        </div>
        <ToastContainer />
      </section>
    </div>
  )
}

export default Login
