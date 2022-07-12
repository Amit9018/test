import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    state: "",
    city: "",
    postalAddress: "",
    locality: "",
    houseNo: "",
    password: "",
  });

  let name, value;

  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
    console.log(e);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      userName,
      email,
      phone,
      firstName,
      lastName,
      state,
      city,
      postalAddress,
      locality,
      houseNo,
      password,
    } = user;
    const result = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        userName: userName,
        email: email,
        phone: phone,
        firstName: firstName,
        lastName: lastName,
        state: state,
        city: city,
        postalAddress: postalAddress,
        locality: locality,
        houseNo: houseNo,
        password: password,
      }),
    });
    const res = await result.json();
    if (res.status === 422 || !res) {
      e.preventDefault();
      alert("Invalid");
    } else {
      alert("Valid");
    }
    console.log(user, "hello");
  };

  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>

                    <form className="mx-1 mx-md-4">
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            value={user.userName}
                            onChange={handleInput}
                            name="userName"
                            className="form-control"
                          />
                          <label className="form-label" for="form3Example1c">
                            Username
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            name="phone"
                            value={user.phone}
                            onChange={handleInput}
                            className="form-control"
                          />
                          <label className="form-label" for="form3Example1c">
                            Phone
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            name="firstName"
                            value={user.firstName}
                            onChange={handleInput}
                          />
                          <label className="form-label" for="form3Example1c">
                            First Name
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            name="lastName"
                            value={user.lastName}
                            onChange={handleInput}
                          />
                          <label className="form-label" for="form3Example1c">
                            Last name
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            name="state"
                            value={user.state}
                            onChange={handleInput}
                          />
                          <label className="form-label" for="form3Example1c">
                            State
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            name="city"
                            value={user.city}
                            onChange={handleInput}
                          />
                          <label className="form-label" for="form3Example1c">
                            City
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            name="postalAddress"
                            value={user.postalAddress}
                            onChange={handleInput}
                          />
                          <label className="form-label" for="form3Example1c">
                            Postal Address
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            name="locality"
                            value={user.locality}
                            onChange={handleInput}
                          />
                          <label className="form-label" for="form3Example1c">
                            Loaclity
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            name="houseNo"
                            value={user.houseNo}
                            onChange={handleInput}
                          />
                          <label className="form-label" for="form3Example1c">
                            House Number
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            id="form3Example3c"
                            className="form-control"
                            name="email"
                            value={user.email}
                            onChange={handleInput}
                          />
                          <label className="form-label" for="form3Example3c">
                            Your Email
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example4c"
                            className="form-control"
                            name="password"
                            value={user.password}
                            onChange={handleInput}
                          />
                          <label className="form-label" for="form3Example4c">
                            Password
                          </label>
                        </div>
                      </div>

                      {/* <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4cd"
                            className="form-control"
                          />
                          <label className="form-label" for="form3Example4cd">
                            Repeat your password
                          </label>
                        </div>
                      </div> */}

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          onClick={handleSubmit}
                          type="button"
                          className="btn btn-primary btn-lg"
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
