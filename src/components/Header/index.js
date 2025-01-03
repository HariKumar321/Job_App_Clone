import {Link, withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {FaDatabase} from 'react-icons/fa'
import {BsFillQuestionSquareFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/">
          <img
            src="https://media-hosting.imagekit.io//a1c9a8752b7a4f69/digitrac_short_logo.png?Expires=1735973410&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=l-UD5QStpSI-vInDfGtM5rh7r5AoopnVC7NGpTXsye8qZQbFs3iWRN0eR-tPOhVs2o4uZeMQ0r~zFzYkZ9DEhrj9X7i9-vLg7EJx1Y1fX2SlUnhV63~BkBWnhS2GYmRN11asRuf9d6VNpmtQcSMd5GRKCWcpmINcBmODKCOoKrDoZhAjs10ACC4d0m96Xr5hnAVymJp4ULKlbmj2Xv14L9of3GcMyeRg5uTR7ozTwPRviLRMbaneVnS7DEM-B2AcWu1U0Fdj3vJBreUr58HjSbiJRQyw4z5EdQQARs5AD0Qapa860k41pfLeanfNj1KyzJOjl6mTXKKOJdTiA6m~Vg__"
            alt="website logo"
            className="home-website-logo"
          />
          <img
            src="https://media-hosting.imagekit.io//9b84b81fef3b4dc2/digitrac_full_logo.png?Expires=1735973276&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=QSutA67ofKy3UGaduGFMjHUI5JkYkaPlIb2CYujHDaNCzKOFtGxj5-SjMG5jF26U8Bk7IYa8U6SwYwkFLOPm8yxGR~-aE4qkLhzDHnIdsNjqiGHa3JiC2-uQtRTgm9AFgZoV7L-8f9FUKm2b6cYyA7-N4ex7-bOE2leDdDzToHbvcJwUEFJuhITts16zVe9OpnDSFJOZorM~kit1ejnuMm2qggO4N0KNQjDNYAkauIuaY0hP-1zrT6hTLta11ikCAxCZ4yr2KO~6JsqXl6P2l013t34hjWmcaHHHCT4uYYqr3Pb75-F18xiqAAH~D0HVSjzZMEKjR7HHphBoYOFLgg__"
            alt="website logo"
            className="home-website-logo"
          />
        </Link>
        <div className="lg-nav-menu">
          <ul className="nav-items">
            <li>
              <Link to="/" className="nav-link-lg">
                Home
              </Link>
              <Link to="/" className="nav-link-sm">
                <AiFillHome className="small-header-icons" />
              </Link>
            </li>
            <li>
              <Link to="/masters" className="nav-link-lg">
                Masters
              </Link>
              <Link to="/masters" className="nav-link-sm">
                <FaDatabase className="small-header-icons" />
              </Link>
            </li>
            <li>
              <Link to="/help" className="nav-link-lg">
                Help
              </Link>
              <Link to="/help" className="nav-link-sm">
                <BsFillQuestionSquareFill className="small-header-icons" />
              </Link>
            </li>

            <li className="logout-btn-list-item-small">
              <button
                type="button"
                className="logout-button-sm"
                onClick={onClickLogout}
              >
                <FiLogOut className="logout-icon-sm" />
              </button>
            </li>
            <li>
              <img
                src="https://media-hosting.imagekit.io//bc7b259489b04ee4/1.png?Expires=1736048618&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=JTygDsTHyrE7PFRdoz9It799quhr2FrBVOLhiejl9OURhKriqyWl4eQr2MXhkRmyuwfVR0lDOu3F5gQmyZ18vJwZjx~78C-IPcKlZbT8GXlorbx3Gc6AwQeRWTFKZkN7t8uXFGfwEB3BaicDchZ92HMUO3cvSgOrUCEWT-xNLibQjeRjl4uWgIK529Ri57CM~aNkmig23cfs9qNSsn4odS7fexAOQ~goUtL8R-ODTckqxvkEvJPXh3qa7O4IBhocxheFTw8mOOcpgPYuGdhZCEhC33ytpzHMmbX5YCbvmhcxUTIAAEo64pRpvGSuNmFB~SWp99Ha5I-Num8EY0MrsA__"
                className="profile-pic-sm"
                alt="profile"
              />
            </li>
          </ul>
          <button
            type="button"
            className="logout-button-lg"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Header)
