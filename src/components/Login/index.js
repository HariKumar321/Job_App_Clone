import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect, Link} from 'react-router-dom'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    showErrorMsg: false,
  }

  onSuccessLogin = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onFailureLogin = errorMsg => {
    this.setState({errorMsg, showErrorMsg: true})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    let {username, password} = this.state

    if (username.toLowerCase().trim(' ') === 'barath') username = 'rahul'
    if (password === '12345') password = 'rahul@2021'

    const userDetails = {username, password}
    const LoginApiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(LoginApiUrl, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSuccessLogin(data.jwt_token)
    } else {
      this.onFailureLogin(data.error_msg)
    }
  }

  updateUsername = event => this.setState({username: event.target.value})

  updatePassword = event => this.setState({password: event.target.value})

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <div className="input-field-container">
        <label htmlFor="username" className="login-input-label">
          USERNAME
        </label>
        <input
          type="text"
          value={username}
          className="login-input-field"
          placeholder="Username"
          id="username"
          onChange={this.updateUsername}
        />
      </div>
    )
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <div className="input-field-container">
        <label htmlFor="password" className="login-input-label">
          PASSWORD
        </label>
        <input
          type="password"
          value={password}
          className="login-input-field"
          placeholder="Password"
          id="password"
          onChange={this.updatePassword}
        />
      </div>
    )
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    const {errorMsg, showErrorMsg} = this.state
    return (
      <div className="login-container">
        <form className="login-form" onSubmit={this.onSubmitForm}>
          <div className="logo-card">
            <img
              src="https://media-hosting.imagekit.io//a1c9a8752b7a4f69/digitrac_short_logo.png?Expires=1735973410&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=l-UD5QStpSI-vInDfGtM5rh7r5AoopnVC7NGpTXsye8qZQbFs3iWRN0eR-tPOhVs2o4uZeMQ0r~zFzYkZ9DEhrj9X7i9-vLg7EJx1Y1fX2SlUnhV63~BkBWnhS2GYmRN11asRuf9d6VNpmtQcSMd5GRKCWcpmINcBmODKCOoKrDoZhAjs10ACC4d0m96Xr5hnAVymJp4ULKlbmj2Xv14L9of3GcMyeRg5uTR7ozTwPRviLRMbaneVnS7DEM-B2AcWu1U0Fdj3vJBreUr58HjSbiJRQyw4z5EdQQARs5AD0Qapa860k41pfLeanfNj1KyzJOjl6mTXKKOJdTiA6m~Vg__"
              alt="website logo"
              className="website-logo-login-form2"
            />
            <img
              src="https://media-hosting.imagekit.io//9b84b81fef3b4dc2/digitrac_full_logo.png?Expires=1735973276&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=QSutA67ofKy3UGaduGFMjHUI5JkYkaPlIb2CYujHDaNCzKOFtGxj5-SjMG5jF26U8Bk7IYa8U6SwYwkFLOPm8yxGR~-aE4qkLhzDHnIdsNjqiGHa3JiC2-uQtRTgm9AFgZoV7L-8f9FUKm2b6cYyA7-N4ex7-bOE2leDdDzToHbvcJwUEFJuhITts16zVe9OpnDSFJOZorM~kit1ejnuMm2qggO4N0KNQjDNYAkauIuaY0hP-1zrT6hTLta11ikCAxCZ4yr2KO~6JsqXl6P2l013t34hjWmcaHHHCT4uYYqr3Pb75-F18xiqAAH~D0HVSjzZMEKjR7HHphBoYOFLgg__"
              alt="website logo"
              className="website-logo-login-form"
            />
          </div>
          <p className="logoin-text"> Login </p>
          {this.renderUsernameField()}
          {this.renderPasswordField()}
          <div className="forgot-card">
            <div>
              <input type="checkbox" id="myCheckbox" />
              <label htmlFor="myCheckbox" className="label-style">
                Remember me
              </label>
            </div>
            <Link to="/forgot-password" className="underline-remove">
              <span className="forgot-text"> Forgot Password?</span>
            </Link>
          </div>
          <div>
            <button type="submit" className="login-button">
              Login
            </button>
            {showErrorMsg && <p className="error-message">*{errorMsg}</p>}
          </div>
        </form>
      </div>
    )
  }
}

export default Login
