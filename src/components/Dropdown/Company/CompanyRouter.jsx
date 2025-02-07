import React from 'react'
import "./CompanyRouter.css"

function CompanyRouter() {
  return (
    <div className="row">
    <div className="col">
      <div className="col-header">
        <span>Company</span>
      </div>
      <div className="col-content">
        <div className="col-item">
          <p>About us</p>
          <p>We’re the Enterprise Digital Commerce Platform</p>
        </div>
        <div className="col-item">
          <p>Careers</p>
          <p>Join the team to help build the future of digital commerce</p>
        </div>
        <div className="col-item">
          <p>Press Room</p>
          <p>Stay up to date on VTEX’s news, releases and statements</p>
        </div>
        <div className="col-item">
          <p>Invester realtions</p>
          <p>Deep-dive into VTEX figures and financial reports</p>
        </div>
      </div>
    </div>

  </div>
  )
}

export default CompanyRouter
