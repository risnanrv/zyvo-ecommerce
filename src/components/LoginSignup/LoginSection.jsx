import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'

function LoginSection() {
    const navigate = useNavigate()
  return (
    <div className='login'>
        <div className="login-container">
            <h1>Login</h1>
            <div className="login-fields">
                <input type="email" placeholder='Email Address' />
                <input type="password" placeholder='Password' />
            </div>
            <div className="checkbox-section">
                <input type="checkbox" />
                <p>Remember me</p>
            </div>
            <div className="login-btn-container">
                <button className='login-btn'>Login</button>
            </div>
            <p className="signup-text">Don't have an account? <span onClick={() => navigate('/signup')}>SignUp</span></p>
        </div>
    </div>
  )
}

export default LoginSection
