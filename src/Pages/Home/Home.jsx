import Banner from "../../Components/Banner/Banner";
import FnQ from "../../Components/F&Q/FnQ";
import FeaturedCard from "../../Components/FeaturedCard/FeaturedCard";

const Home = () => {
    return(
        <div className="space-y-5">
             <Banner/>
             <FeaturedCard/>
             <FnQ/>
        </div>
    )}
export default Home;