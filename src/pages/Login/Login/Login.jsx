import React, { useContext, useState } from "react";
import img from "../../../assets/images/login/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { fromJSON } from "postcss";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const location = useLocation();
  // console.log(location);
  const form = location.state?.from?.pathname || "/";
  const navigete = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    console.log(email, password);
    setError("");
    loginUser(email, password)
      .then((rusult) => {
        const user = rusult.user;
        Swal.fire({
          icon: "success",
          title: "Your login has been done",
          showConfirmButton: false,
          timer: 1500,
        });
        const logdingUser = {
          email: user.email,
        };
        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(logdingUser),
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log("jwt data", data);
            localStorage.setItem("car-access-token", data.token);
            navigete(form, { replace: true });
          });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div>
      <div className="hero h-[919px] bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2 mr-10">
            <img className="w-full " src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
                <p className="text-center">
                  Don't have an account
                  <Link to="/signup" className="mt-5 font-bold text-orange-600">
                    Regester
                  </Link>
                </p>
              </form>
              <p className="text-red-600">{error}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
