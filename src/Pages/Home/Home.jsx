import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import FnQ from "../../Components/F&Q/FnQ";
import FeaturedCard from "../../Components/FeaturedCard/FeaturedCard";
import Team from "../../Components/Team/Team";
import { motion } from "framer-motion";

const Home = () => {
    return(
        <motion.div className="space-y-10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        >
            <Helmet><title>PaltePals | Home</title></Helmet>
             <Banner/>
             <FeaturedCard/>
             <Team/>
             <FnQ/>
        </motion.div>
    )}
export default Home;