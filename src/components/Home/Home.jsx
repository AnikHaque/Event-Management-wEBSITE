import About from "../About/About";
import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import DonationCategory from "../DonationCategory/DonationCategory";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div className="w-full bg-white" >
       <Banner></Banner>
          <About></About>
          <Services></Services>
        </div>
    );
};

export default Home;