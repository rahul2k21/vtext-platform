import CustomerStories from "../Customer/CustomerStories";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Contact.css";

function Contact() {
  const Contact = [
    { contact: "Contact Reason" },
    { contact: "I'm not a customer - yet I'd like to talk to sales" },
    { contact: "I'm a customer - yet I'd like to talk to sales" },
    { contact: "I'm a customer - I need technical support" },
    { contact: "I'm a partner - yet I'd like to connect" },
    { contact: "I have a media request" },
    { contact: "Other Demands" },
  ];
  const Country = [
    { country: "Country*" },
    { country: "Canada" },
    { country: "Brazil" },
    { country: "United Kingdom" },
    { country: "Germany" },
    { country: "France" },
    { country: "Italy" },
    { country: "Australia" },
    { country: "India" },
    { country: "China" },
    { country: "Japan" },
    { country: "South Korea" },
    { country: "Mexico" },
    { country: "Russia" },
    { country: "South Africa" },
    { country: "Argentina" },
    { country: "Saudi Arabia" },
    { country: "Turkey" },
    { country: "Spain" },
    { country: "Netherlands" },
  ];

  return (
    <>
    <Navbar/>
    <div className="contact-section">
      <div className="contact-content">
        <div className="contact-form">
          <select className="selected">
            {Contact.map((item) => (
              <option>{item.contact}</option>
            ))}
          </select>
          <input type="text" placeholder="First Name*" />
          <input type="text" placeholder="Last Name*" />
          <input type="email" placeholder="Corporate Name*" />
          <select className="selected">
            {Country.map((item) => (
              <option>{item.country}</option>
            ))}
          </select>
          <div className="mobile-input">
            <select className="selected-country">
              <option>India*</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
              <option>Option 5</option>
            </select>
            <input type="text" placeholder="91+" />
          </div>
          <input type="text" placeholder="Company*" />
          <textarea name="w3review" rows="3" cols="50"></textarea>
          <div className="check-box">
            <input type="checkbox" />
            <p>
              By checking the box you agree to be contacted by VTEX by any means
              of communication, including email or phone, in order to receive
              the latest updates on VTEX content, products or services.
            </p>
          </div>
          <div className="rich-text">
            <p>By sending you understand and agree to the</p>
            <a href="">Privacy Terms</a>
          </div>

          <button>Submit</button>
        </div>
      </div>
    </div>
    <CustomerStories/>
    <Footer />
    </>
    
  );
}

export default Contact;
