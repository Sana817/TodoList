import React, { useState } from "react";
import "../Styles/TodoStyle.css";
import { useNavigate } from "react-router-dom";
const { signup } = require("../Controller/TodoController");

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
    userName: "",
  });

  const onChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await signup(user);
      if (res) {
        navigate("/");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <>
      <div className="container inner" style={{ marginTop: "30px" }}>
        <form onSubmit={onSubmit}>
          <h1>Signup</h1>
          <hr />
          <div className="mb-3">
            <label htmlFor="userName" className="form-label">
              User Name
            </label>
            <input
              type="text"
              className="form-control"
              id="userName"
              name="userName"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              name="email"
              aria-describedby="emailHelp"
              onChange={onChange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              onChange={onChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Signup
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
