import React, { useContext } from "react";
import img from "../../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const Regester = () => {
  const {createUser} = useContext(AuthContext)
  const handleSubmit =e=>{
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;
    console.log(name, email, password);
    createUser(email, password)
    .then(rusult=>{
      const user = rusult.user;
      console.log(user);
      Swal.fire({
        icon: "success",
        title: "Your Regester has been done",
        showConfirmButton: false,
        timer: 1500,
      });      
    })
    .catch(error=> {
      console.log(error.message);
    })
  }
  return (
    <div>
      <div className="hero h-[919px] bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2 mr-10">
            <img className="w-full " src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered"
                  />
                </div>
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
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">Regester</button>
                </div>
                <p className="text-center">Already Have an acount <Link to='/login' className="mt-5 font-bold text-orange-600">Login</Link> </p>
              </form>
              <SocialLogin/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regester;
