import "./Review.css";
import customerImg from  "../Review/images/customerstory.webp";

function Review() {
  return (
    <div className="review-section">
      <div className="review-container">
        <div className="card-items-1 review-text-heading1 ">
            <div>
            <img src={customerImg} alt="" />
            <p>Hear from your peers</p>
            <p>Discover why VTEX is named a customer-first technology provider by Gartner.</p>
            <button>READ All REVIEWS</button>
           </div>
        </div>
        <div className="card-items-2 review-text-heading2">
        <div className="review-star">
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
       </div>
            <p>B2B SaaS technical architecture and level of service exceeded expectations</p>
            <p>Great technology and great partners. We were up and running in 3 months instead of 9+ months of typical B2B platforms. And we found the platform to be highly flexible and customizable, at lower costs.</p>
            <button>Read Full Review</button>
        </div>
        <div className="card-items-3 review-text-heading2">
            <div className="review-star">
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
            </div>
            <p>A very complete platform, easy to use, implement and integrate</p>
            <p>The support offered for configuring the software, and in our specific case, all the APIs offered for integrating with our ERP and other software as well have proven to be very efficient, easy understanding and execution. It shows value as a very complete solution out of the box.z</p>
            <button>Read Full Review</button>
        </div>
      </div>
    </div>
  );
}

export default Review;
