import  { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./images/vtexlogo.svg";
import { FaAngleDown } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
import PlatformRouter from "../Dropdown/Platform/PlatformRouter";
import SolutionsRouter from "../Dropdown/Solution/SolutionsRouter";
import PartnerRouter from "../Dropdown/Partner/PartnerRouter";
import ResourcesRouter from "../Dropdown/Resources/ResourcesRouter";
import CompanyRouter from "../Dropdown/Company/CompanyRouter";
import RegionRouter from "../Dropdown/Region/RegionRouter";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handletoggle = () => {
    setIsNavOpen(!isNavOpen); 
  };

  return (
    <div className="navbar-section">
      <div className="navbar-container">
        <div className="inner-nav">
          <Link to="/" className="logo">
            <img src={logo} alt="Logo" />
          </Link>
          <nav className={`nav-responsive ${isNavOpen ? "open" : ""}`}>
            <ul>
              <div>
                <li>
                  <Link to="/platform">
                    Platform <FaAngleDown className="down-angle" />
                  </Link>
                </li>
                <div className="dropdown-content dropdown-content-1">
                  <PlatformRouter />
                </div>
              </div>
              <div>
                <li>
                  <Link to="/solutions">
                    Solutions <FaAngleDown className="down-angle" />
                  </Link>
                </li>
                <div className="dropdown-content dropdown-content-2">
                  <SolutionsRouter />
                </div>
              </div>
              <div>
                <li>
                  <Link to="/customer">Customer</Link>
                </li>
              </div>
              <div>
                <li>
                  <Link to="/partners">
                    Partners <FaAngleDown className="down-angle" />
                  </Link>
                </li>
                <div className="dropdown-content dropdown-content-3">
                  <PartnerRouter />
                </div>
              </div>
              <div>
                <li>
                  <Link to="/resources">
                    Resources <FaAngleDown className="down-angle" />
                  </Link>
                </li>
                <div className="dropdown-content dropdown-content-4">
                  <ResourcesRouter />
                </div>
              </div>
              <div>
                <li>
                  <Link to="/company">
                    Company <FaAngleDown className="down-angle" />
                  </Link>
                </li>
                <div className="dropdown-content dropdown-content-5">
                  <CompanyRouter />
                </div>
              </div>
            </ul>
          </nav>
          <div className="contact-button">
            <div className="inner-globe">
              <CiGlobe />
              <FaAngleDown className="inner-angle" />
              <div className="dropdown-globe">
                <RegionRouter />
              </div>
            </div>
            <Link to="/contact" className="contact-btn">
              Contact us
            </Link>
          </div>
          <div className="toggle-bar" onClick={handletoggle}>
            <svg width="24" height="24" viewBox="4 4 24 24" fill="currentColor" role="img">
              <path d="M7 10C7 9.44772 7.44772 9 8 9H24C24.5523 9 25 9.44772 25 10C25 10.5523 24.5523 11 24 11H8C7.44772 11 7 10.5523 7 10Z" fill="currentColor"></path>
              <path d="M7 16C7 15.4477 7.44772 15 8 15H24C24.5523 15 25 15.4477 25 16C25 16.5523 24.5523 17 24 17H8C7.44772 17 7 16.5523 7 16Z" fill="currentColor"></path>
              <path d="M8 21C7.44772 21 7 21.4477 7 22C7 22.5523 7.44772 23 8 23H24C24.5523 23 25 22.5523 25 22C25 21.4477 24.5523 21 24 21H8Z" fill="currentColor"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
