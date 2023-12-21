import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

/* eslint-disable no-unused-vars */
const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [passwordError, setPasswordError] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must contain at least 6 characters, including at least one uppercase letter and one special character (!@#$%^&*)"
      );
      Swal.fire({
        icon: "error",
        title: "Registration Error",
        text: passwordError,
      });
      return;
    }

    createUser(email, password)
      .then((res) => {
        console.log(res);
        Swal.fire({
          icon: "success",
          title: "Registration Successful",
          text: "You have been successfully registered!",
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Registration Error",
          text: error.message,
        });
      });
    e.target.email.value = "";
    e.target.password.value = "";
    e.target.name.value = "";
  };
  return (
    <div data-aos="fade-down">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center my-6 lg:text-left">
            <h1 className="text-5xl font-bold">Register</h1>
          </div>
          <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body w-full">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className=" input input-bordered"
                  required
                />
              </div>
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
              <div className="form-control mt-6">
                <button className="btn text-white bg-[#9C0063]">
                  Register
                </button>
              </div>
              <p className="mt-2">
                Already have an account?{" "}
                <Link className="text-blue-500" to="/login">
                  Login here.
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
