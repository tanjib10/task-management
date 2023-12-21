import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../Firebase/firebase.config";
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "You have been successfully Logged in!",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Login Error",
          text: "Email and Password did not match",
        });
      });
  };

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signIn(email, password)
      .then((res) => {
        console.log(res);
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "You have been successfully Logged in!",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Login Error",
          text: "Email and Password did not match",
        });
      });
  };
  return (
    <div data-aos="fade-up">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center my-6 lg:text-left">
            <h1 className="text-5xl font-bold">Please Login</h1>
          </div>
          <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
            <form onSubmit={handleLogIn} className="card-body w-full">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label"></label>
              </div>
              <div className="flex justify-center items-center mt-2">
                <button className="btn flex-1 text-white bg-[#9C0063]">
                  Login
                </button>
                <button
                  onClick={handleGoogleSignIn}
                  className="flex-1 btn text-white bg-[#9C0063]"
                >
                  Google
                </button>
              </div>
              <p className="mt-2">
                Do not have an account?{" "}
                <Link className="text-blue-500" to="/register">
                  Register here.
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
