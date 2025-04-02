import React from 'react'
import './Signup.css'
import { useNavigate } from 'react-router-dom'
function SignupSection() {

  const navigate = useNavigate()
  return (
    <div className='signup'>
        <div className="signup-container">

            <h1>SignUp</h1>

            <div className="signup-fields">
                <input type="text" placeholder='Your Name' />
                <input type="email" placeholder='Email Address' />
                <input type="password" placeholder='Password' />
                </div>
                <div className="checkbox-section">
                <input type="checkbox" />
                <p>By Signup , i agree to your terms and conditions</p>
            
                </div>
                

                <div className="signup-btn-container">

                <button className='signup-btn'>SignUp</button>

                </div>
                <p className="login-text">Already have an account? <span onClick={() => navigate('/login')}>Login</span></p>



        </div>
      
    </div>
  )
}

export default SignupSection
