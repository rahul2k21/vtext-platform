import "./Stories.css";
import stanleycover from "../Stories/images/stanleycover.webp";
import motorola from "../Stories/images/logomotorola.svg";
import logoloreal from "../Stories/images/logoloreal.svg";

function Stories() {
  return (
    <div className="stories-section">
      <div className="stories-content">
        <h1>Customer Stories</h1>
        <p className="content-des">
          More than 3,400 stores worldwide run on VTEX`s composable and complete
          commerce platform.
        </p>
        <div className="container-main-stories">
          <div className="stories-primary">
            <img src={stanleycover} alt="" />
            <div className="stories-title">
              <p>
                How Stanley Black & Decker tailored their B2B operations to
                increase productivity
              </p>
              <p>
                In partnership with VTEX, Stanley Black & Decker completely
                reshaped its B2B operations, tailoring buyer journeys that led
                to higher seller productivity and collaboration.
              </p>
            </div>
            <button className="read-btn">READ MORE</button>
          </div>
          <div className="stories-secondry">
            <div className="secondry-substories">
              <img src={motorola} alt="" />
              <div className="secondry-title">
                <p>
                  Around the world in 10 months: Motorola’s journey of scaling
                  its ecommerce operation in 37 countries
                </p>
              </div>
              <button className="read-btn">READ MORE</button>
            </div>
            <div className="secondry-substories">
              <img src={logoloreal} alt="" />
              <div className="secondry-title">
                <p>
                  L’Oréal gave a new look to its D2C experience using VTEX
                  headless technology
                </p>
              </div>
              <button className="read-btn">READ MORE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stories;
