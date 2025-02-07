import { useEffect, useState } from "react";
import "./Footer.css";
import footerlogo from "../Footer/images/vtexwhite.svg";
import youtubelogo from "../Footer/images/sociallinkedin.svg";
import linkdinlogo from "../Footer/images/socialyoutube.svg";
import { FaAngleDown } from "react-icons/fa6";

function Footer() {
  const platform = [
    { title: "Commerce Platform" },
    { title: "Order Management System" },
    { title: "Sales App" },
    { title: "Marketplace & Seller Management" },
    { title: "Pick and Pack" },
    { title: "VTEX Data Pipeline" },
    { title: "VTEX Live Shopping" },
    { title: "VTEX Shield" },
    { title: "VTEX IO" },
  ];

  const solution = [
    { title: "B2C Commerce" },
    { title: "B2B Commerce" },
    { title: "Omnichannel" },
    { title: "Ecommerce Marketplace" },
    { title: "Headless commerce" },
  ];

  const partner = [{ title: "Become a Partner" }, { title: "Lengow" }];

  const resource = [
    { title: "B2C Commerce" },
    { title: "B2B Commerce" },
    { title: "Blog" },
    { title: "Help center" },
    { title: "Developer Portal" },
    { title: "Compliance" },
  ];

  const company = [
    { title: "About us" },
    { title: "Careers" },
    { title: "Press Room" },
    { title: "Investor Relations" },
  ];

  const [openSection, setOpenSection] = useState({}); 
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  const toggleSection = (section) => {
    if (isMobile) {
      setOpenSection((prev) => ({
        ...prev,
        [section]: !prev[section],
      }));
    }
  };

  const handleResize = () => {
    const mobile = window.innerWidth <= 1024;
    setIsMobile(mobile);
    if (!mobile) {
      setOpenSection({}); 
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={footerlogo} alt="Footer Logo" />
        </div>
        <div className="footer-bottom">
          <div className="div1">
            <span onClick={() => toggleSection("platform")}>
              Platform <FaAngleDown className="footer-angle" />
            </span>
            {(openSection.platform || !isMobile) && (
              <div className="platform-items">
                {platform.map((item, index) => (
                  <p key={index}>{item.title}</p>
                ))}
              </div>
            )}
          </div>
          <div className="div2">
            <span onClick={() => toggleSection("solution")}>
              Solutions <FaAngleDown className="footer-angle" />
            </span>
            {(openSection.solution || !isMobile) && (
              <div className="platform-items">
                {solution.map((item, index) => (
                  <p key={index}>{item.title}</p>
                ))}
              </div>
            )}
          </div>
          <div className="div3">
            <span onClick={() => toggleSection("partner")}>
              Partners <FaAngleDown className="footer-angle" />
            </span>
            {(openSection.partner || !isMobile) && (
              <div className="platform-items">
                {partner.map((item, index) => (
                  <p key={index}>{item.title}</p>
                ))}
              </div>
            )}
          </div>
          <div className="div4">
            <span onClick={() => toggleSection("resource")}>
              Resources <FaAngleDown className="footer-angle" />
            </span>
            {(openSection.resource || !isMobile) && (
              <div className="platform-items">
                {resource.map((item, index) => (
                  <p key={index}>{item.title}</p>
                ))}
              </div>
            )}
          </div>
          <div className="div5">
            <span onClick={() => toggleSection("company")}>
              Company <FaAngleDown className="footer-angle" />
            </span>
            {(openSection.company || !isMobile) && (
              <div className="platform-items">
                {company.map((item, index) => (
                  <p key={index}>{item.title}</p>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="social-section">
          <div className="footer-social">
            <div className="linkdin-icon">
              <a
                href="https://www.linkedin.com/in/your-profile"
                rel="noopener noreferrer"
              >
                <img src={linkdinlogo} alt="LinkedIn Logo" />
              </a>
            </div>

            <div className="youtube-icon">
              <a
                href="https://www.linkedin.com/in/your-profile"
                rel="noopener noreferrer"
              >
                <img src={youtubelogo} alt="YouTube Logo" />
              </a>
            </div>
          </div>
          <div className="footer-secondary">
            <ul>
              <li>Privacy Policy</li>
              <li>Legal</li>
              <li>Compliance</li>
              <li>Security</li>
              <li>Sitemap</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
