import Audience from "../Audience/Audience";
import Navbar from "../Navbar/Navbar";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Audience></Audience>
    </div>
  );
};

export default Home;
