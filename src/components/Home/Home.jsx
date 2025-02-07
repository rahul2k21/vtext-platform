import CustomerStories from "../Customer/CustomerStories";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Review from "../Review/Review";
import Stories from "../Stories/Stories";


function Home() {
  return (
    <div className="container">
      <div className="inner-container">
        <Navbar />
        <Stories />
        <CustomerStories />
        <Review />
        <Footer />
      </div>
    </div>
  );
  
}

export default Home
