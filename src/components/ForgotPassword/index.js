import {Link} from 'react-router-dom'
import {FaLock} from 'react-icons/fa'
import {BiLeftArrow} from 'react-icons/bi'

import './index.css'

const ForgotPassword = () => (
  <div className="forgot-password-container">
    <form className="forgot-form">
      <h1 className="forgot-heading">
        Forgot Password? <FaLock className="lock-icon" />
      </h1>
      <p className="forgot-para"> Enter your username and mobile no. </p>
      <p className="forgot-para"> well send you OTP to reset your password </p>
      <div className="field-container">
        <label htmlFor="username" className="login-input-label">
          Username
        </label>
        <input
          id="username"
          type="text"
          placeholder="Username"
          className="forgot-input"
        />
        <label htmlFor="mobile" className="login-input-label">
          Mobile
        </label>
        <input
          id="mobile"
          type="text"
          placeholder="Mobile"
          className="forgot-input"
        />
      </div>
      <button className="login-button"> Send OTP </button>
      <Link to="/login" className="underline-remove">
        <p className="back-login-text">
          <BiLeftArrow className="arrow-icon" /> Back to login
        </p>
      </Link>
    </form>
  </div>
)

export default ForgotPassword
