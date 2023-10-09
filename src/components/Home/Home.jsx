import About from "../About/About";
import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import DonationCategory from "../DonationCategory/DonationCategory";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import Review from "../Review/Review";
import Services from "../Services/Services";
import Teams from "../Teams/Teams";
import Works from "../Works/Works";


const Home = () => {
    return (
        <div className="w-full bg-white" >
       <Banner></Banner>
       <br></br>
       <br></br>
       <br></br>
          <Services></Services>
          <br></br>
          <br></br>
          <br></br>
            <About></About>
            <br></br>
            <br></br>
            <br></br>
          <Works></Works>
            <br></br>
            <br></br>
            <br></br>
          <Teams></Teams>
            <br></br>
            <br></br>
            <br></br>
          <Review></Review>
            <br></br>
            <br></br>
            <br></br>
        </div>
    );
};

export default Home;