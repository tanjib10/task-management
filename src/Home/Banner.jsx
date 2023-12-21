import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Banner = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="max-w-screen-xl mx-auto h-[70vh]">
      <div
        className="hero min-h-[80vh] relative"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/4F7jShK/glenn-carstens-peters-RLw-UC03-Gwc-unsplash.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          opacity: 0.7,
        }}
      >
        <div className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h3 className="text-fuchsia-900 text-xl lg:text-3xl font-bold opacity-100">
            Your <br /> Task Management Platform
          </h3>
          <br />
          <Link to={user ? "/dashboard" : "/login"}>
            <button className="btn bg-[#9C0063] text-white opacity-100">
              Explore Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
