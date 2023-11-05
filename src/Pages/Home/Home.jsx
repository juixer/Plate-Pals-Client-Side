import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import FnQ from "../../Components/F&Q/FnQ";
import FeaturedCard from "../../Components/FeaturedCard/FeaturedCard";
import Team from "../../Components/Team/Team";

const Home = () => {
    return(
        <div className="space-y-10">
            <Helmet><title>PaltePals | Home</title></Helmet>
             <Banner/>
             <FeaturedCard/>
             <Team/>
             <FnQ/>
        </div>
    )}
export default Home;