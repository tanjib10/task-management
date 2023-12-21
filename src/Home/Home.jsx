import Audience from "../Audience/Audience";
import Navbar from "../Navbar/Navbar";
import Banner from "./Banner";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Audience></Audience>
      <Footer></Footer>
    </div>
  );
};

export default Home;
