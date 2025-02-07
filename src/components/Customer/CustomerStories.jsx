import { useState } from "react";
import "./CustomerStories.css";
import briggs from "../Customer/images/briggs.webp";
import newbalance from "../Customer/images/newbalance.webp";
import samsunglogo from "../Customer/images/samsunglogo.webp";
import logomazda from "../Customer/images/logomazda.svg";
import cartamundi19 from "../Customer/images/cartamundi19.svg";
import Jeffers from "../Customer/images/Jeffers.webp";
import logofravega from "../Customer/images/logofravega.svg";
import logogrupohope from "../Customer/images/logogrupohope.svg";
import TFG from "../Customer/images/TFG.svg";
import Untitled from "../Customer/images/Untitled.webp";
import Pierce from "../Customer/images/Pierce.jpg";


function CustomerStories() {
  const industries = [
    { value: "0", label: "All industries" },
    { value: "1", label: "Audi" },
    { value: "2", label: "BMW" },
    { value: "3", label: "Citroen" },
    { value: "4", label: "Ford" },
    { value: "5", label: "Honda" },
    { value: "6", label: "Jaguar" },
    { value: "7", label: "Land Rover" },
    { value: "8", label: "Mercedes" },
    { value: "9", label: "Mini" },
    { value: "10", label: "Nissan" },
    { value: "11", label: "Toyota" },
    { value: "12", label: "Volvo" },
  ];

  const solutions = [
    { value: "0", label: "All solutions" },
    { value: "1", label: "Audi" },
    { value: "2", label: "BMW" },
    { value: "3", label: "Citroen" },
    { value: "4", label: "Ford" },
    { value: "5", label: "Honda" },
    { value: "6", label: "Jaguar" },
    { value: "7", label: "Land Rover" },
    { value: "8", label: "Mercedes" },
    { value: "9", label: "Mini" },
    { value: "10", label: "Nissan" },
    { value: "11", label: "Toyota" },
    { value: "12", label: "Volvo" },
  ];

  const galleryCards = [
    {
        image: briggs,
        title: "Revolutionizing Shopping: Target's E-commerce Overhaul",
        industry: "2",
    },
    {
        image: newbalance,
        title: "Building Connections: Amazon's Community Engagement",
        industry: "0",
    },
    {
        image: samsunglogo,
        title: "Crafting a Legacy: LEGO's Sustainability Journey",
        industry: "1",
    },
    {
        image: logomazda,
        title: "From Concept to Consumer: Nike's Digital Footprint",
        industry: "2",
    },
    {
        image: cartamundi19,
        title: "Efficiency Unleashed: Dell's Supply Chain Innovation",
        industry: "4",
    },
    {
        image: Jeffers,
        title: "Evolving Experience: IKEA's Smart Home Solutions",
        industry: "0",
    },
    {
        image: logofravega,
        title: "Leading Change: Coca-Cola's Digital Marketing Strategy",
        industry: "5",
    },
    {
        image: logogrupohope,
        title: "Powering Growth: eBay's Global Marketplace Expansion",
        industry: "2",
    },
    {
        image: TFG,
        title: "Future Forward: Intel's Tech Advancements",
        industry: "0",
    },
    {
        image: Untitled,
        title: "Enhancing Lifestyle: Philips' Health Innovations",
        industry: "3",
    },
    {
        image: Pierce,
        title: "Dare to Dream: Under Armour's Athlete Engagement",
        industry: "2",
    },
    {
        image: briggs,
        title: "Creating Value: Mastercard's Digital Payment Solutions",
        industry: "4",
    },
    {
        image: samsunglogo,
        title: "Transforming Retail: Walmart's E-commerce Revolution",
        industry: "0",
    },
    {
        image: newbalance,
        title: "Embracing Change: Starbucks' Customer-Centric Approach",
        industry: "1",
    },
    {
        image: samsunglogo,
        title: "Future of Work: Salesforce's Remote Collaboration Tools",
        industry: "3",
    },
    {
        image: logomazda,
        title: "Innovating Mobility: Ford's Electric Vehicle Initiative",
        industry: "2",
    },
    {
        image: cartamundi19,
        title: "Driving Connectivity: Tesla's Autonomous Driving Tech",
        industry: "4",
    },
    {
        image: Jeffers,
        title: "Smart Solutions: Google Home's Integration",
        industry: "7",
    },
    {
        image: logofravega,
        title: "The Future is Now: Sony's AI in Entertainment",
        industry: "6",
    },
    {
        image: logogrupohope,
        title: "Global Impact: Unilever's Sustainable Practices",
        industry: "2",
    },
    {
        image: TFG,
        title: "Empowering Students: Microsoft's Educational Tools",
        industry: "4",
    },
    {
        image: Untitled,
        title: "Caring for Health: Johnson & Johnson's Innovations",
        industry: "8",
    },
    {
        image: Pierce,
        title: "Redefining Fitness: Fitbit's Health Tracking",
        industry: "7",
    },
    {
        image: briggs,
        title: "Seamless Transactions: Visa's Contactless Payment Tech",
        industry: "4",
    },
    {
        image: samsunglogo,
        title: "Retail Revolution: Shopify's Online Store Solutions",
        industry: "0",
    },
    {
        image: newbalance,
        title: "Creative Engagement: Spotify's Artist Support",
        industry: "1",
    },
    {
        image: samsunglogo,
        title: "Digital Transformation: Adobe's Creative Cloud",
        industry: "3",
    },
    {
        image: logomazda,
        title: "Innovative Design: Apple’s Product Development",
        industry: "1",
    },
    {
        image: cartamundi19,
        title: "Sustainable Fashion: H&M's Eco-Friendly Line",
        industry: "4",
    },
    {
        image: Jeffers,
        title: "Connected Living: Amazon's Smart Home Devices",
        industry: "9",
    },
    {
        image: logofravega,
        title: "Next-Gen Marketing: TikTok's Brand Strategies",
        industry: "1",
    },
    {
        image: logogrupohope,
        title: "Global Solutions: IBM's Cloud Innovations",
        industry: "4",
    },
    {
        image: TFG,
        title: "Pioneering Health: Moderna's Vaccine Development",
        industry: "0",
    },
    {
        image: Untitled,
        title: "Fitness Redefined: Peloton's Community Engagement",
        industry: "3",
    },
    {
        image: Pierce,
        title: "Innovating Experience: Airbnb's Travel Solutions",
        industry: "2",
    },
    {
        image: briggs,
        title: "Digital Evolution: Nokia's Network Solutions",
        industry: "4",
    },
    {
        image: newbalance,
        title: "Customer Loyalty: Sephora's Beauty Community",
        industry: "1",
    },
    {
        image: samsunglogo,
        title: "Automation in Action: Siemens' Industry 4.0",
        industry: "5",
    },
    {
        image: logomazda,
        title: "Breaking Barriers: Netflix's Global Content Strategy",
        industry: "9",
    },
    {
        image: cartamundi19,
        title: "Innovating Energy: BP's Renewable Projects",
        industry: "4",
    },
    {
        image: Jeffers,
        title: "Connected Health: Apple's Health App Innovations",
        industry: "0",
    },
    {
        image: logofravega,
        title: "E-commerce Leadership: Alibaba's Marketplace Strategy",
        industry: "1",
    },
    {
        image: logogrupohope,
        title: "Digital Finance: Square's Payment Solutions",
        industry: "2",
    },
    {
        image: TFG,
        title: "Future Transportation: Lyft's Ride-Sharing Model",
        industry: "0",
    },
    {
        image: Untitled,
        title: "Wellness Innovation: Nutrisystem's Health Solutions",
        industry: "3",
    },
    {
        image: Pierce,
        title: "Tech for Good: Cisco's Connectivity Initiatives",
        industry: "5",
    }
];

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIndustry, setSelectedIndustry] = useState("0");
  const itemsPerPage = 18;
  const indexOfLastCard = currentPage * itemsPerPage;
  const indexOfFirstCard = indexOfLastCard - itemsPerPage;

  const filteredCards = galleryCards.filter((card) => {
    return selectedIndustry === "0" || card.industry === selectedIndustry;
  });

  const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);
  const totalPages = Math.ceil(filteredCards.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="customer-stories-sec">
      <div className="customer-content">
        <div className="filter-sec">
          <p>Filter by</p>
          <div className="customer-dropdown-industries">
            <div className="custom-select">
              <select
                className="selected"
                value={selectedIndustry}
                onChange={(e) => {
                  setSelectedIndustry(e.target.value);
                  setCurrentPage(1);
                }}
              >
                {industries.map((industry) => (
                  <option key={industry.value} value={industry.value}>
                    {industry.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="customer-dropdown-solutions">
            <div className="custom-select">
              <select className="selected">
                {solutions.map((solution) => (
                  <option key={solution.value} value={solution.value}>
                    {solution.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="gallery-sec">
          <div className="gallery-card-items">
            {currentCards.map((card, index) => (
              <div className="gallery-card" key={index}>
                <div className="card-img">
                  <img src={card.image} alt="" />
                </div>
                <p>{card.title}</p>
                <span className="case">Read more</span>
              </div>
            ))}
          </div>
        </div>
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CustomerStories;
