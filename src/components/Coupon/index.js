import {FaNewspaper, FaTasks, FaGasPump, FaTruck} from 'react-icons/fa'
import {AiOutlineStop} from 'react-icons/ai'

import './index.css'

const Coupon = () => (
  <>
    <ul className="ul-container">
      <li className="each-coupon-card sky-blue">
        <FaNewspaper />
        <span> 0 </span>
        <p className="card-text"> Coupon Requested </p>
      </li>

      <li className="each-coupon-card green">
        <FaTasks />
        <span> 0 </span>
        <p className="card-text"> Coupon Approved </p>
      </li>

      <li className="each-coupon-card blue">
        <FaGasPump />
        <span> 0 </span>
        <p className="card-text"> Coupon Generated </p>
      </li>

      <li className="each-coupon-card green">
        <FaGasPump />
        <span> 0 </span>
        <p className="card-text"> Coupon Utilized </p>
      </li>

      <li className="each-coupon-card  gray">
        <FaGasPump />
        <span> 0 </span>
        <p className="card-text"> Coupon InProgress </p>
      </li>

      <li className="each-coupon-card  red">
        <AiOutlineStop />
        <span> 0 </span>
        <p className="card-text"> Coupon Cancelled </p>
      </li>

      <li className="each-coupon-card yellow">
        <FaTruck />
        <span> 0 </span>
        <p className="card-text"> Vehicles </p>
      </li>
    </ul>
  </>
)

export default Coupon
