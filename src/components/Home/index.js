import Header from '../Header'
import Coupon from '../Coupon'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="input-main-container">
        <div className="select-options-card">
          <label htmlFor="selector" className="branch-label-text">
            Branch
          </label>
          <select className="selector" id="selector">
            <option> All </option>
            <option> SPL - CORPORATE </option>
            <option> CHENNAI </option>
          </select>
        </div>

        <div className="select-options-card">
          <label htmlFor="fromDate" className="branch-label-text">
            From Date
          </label>
          <input type="date" id="fromDate" className="date-input" />
          <label htmlFor="endDate" className="branch-label-text">
            End Date
          </label>
          <input type="date" id="endDate" className="date-input" />
        </div>
      </div>
      <Coupon />
      <div className="bottom-container">
        <h1 className="bottom-header"> PFS Wise Consumption </h1>
        <p className="bottom-para"> PFS Wise Consumption (0 Ltrs) </p>
        <p className="bottom-data"> No Data </p>
      </div>
    </div>
  </>
)

export default Home

// https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/8103728/142995_42655.png
