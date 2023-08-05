// /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.
// /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/
// "[a-zA-Z]+\\.?"
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import "../Dash/Mainpage";

function Login() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [ error,setError] = useState("");
  const [success, setSuccess] = useState("");
  const onChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  const nameValidation = (name) => {
    const nameRegex = /^[A-Za-z][A-Za-z0-9_]{5,29}$/;
    return nameRegex.test(name);
  };
  const emailValidation = (email) => {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return emailRegex.test(email);
  };
  const passwordValidation = (password) => {
    const passwordRegex =
      /^(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    return passwordRegex.test(password);
  };
  const handleSubmit = (e) => {
    setError("");
    setSuccess("");
    if (!nameValidation(input.name)) {
      return setError("Please enter valid Name");
    }
    if (!emailValidation(input.email)) {
      return setError("Please enter valid email id");
    }
    if (!passwordValidation(input.password)) {
      return setError("Please enter vaild Password");
    }
    setSuccess("Login Successfully");
    const username = input.name;
    console.log(username);
    navigate("/MainPage", { state: { username: username } });
    e.preventDefault();
  };
  return (
    <div className="register">
      <div className="row">
        <div className="col-1-side-image">
          <p>
            "We've been using Untitled to kick start every new project and can't
            imagine working without it."
          </p>
        </div>
      </div>
      <div className="col-right">
        <div className="input-box">
          <h2>Create an account</h2>
          <span>Let's get started with your 30 days free trial</span>
          {error.length > 0 && (
            <div
              style={{
                marginBottom: "10px",
                marginLeft: "40px",
                marginTop: "20px",
                color: "red",
              }}
            >
              {error}
            </div>
          )}
          {success.length > 0 && (
            <div
              style={{
                marginBottom: "10px",
                marginLeft: "40px",
                marginTop: "20px",
                color: "green",
              }}
            >
              {success}
            </div>
          )}
          <div className="form">
            <input
              onChange={onChange}
              type="text"
              name="name"
              placeholder="Name"
              value={input.name}
            />
          </div>
          <div className="form">
            <input
              onChange={onChange}
              type="text"
              name="email"
              placeholder="Email"
              value={input.email}
            />
          </div>
          <div className="form">
            <input
              onChange={onChange}
              type="password"
              value={input.password}
              name="password"
              placeholder="Password"
            />
          </div>
          <div className="btn">
            <button type="submit" onClick={handleSubmit}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
