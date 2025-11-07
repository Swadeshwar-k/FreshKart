
import React, { useRef, useState } from 'react';
import loginStyle from '../styles/login.module.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { login } from "../redux/authSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const unameRef = useRef();
  const pwordRef = useRef();

  const [unameErr, setUnameErr] = useState("");
  const [pwordErr, setPwordErr] = useState("");

  const validateForm = () => {
    let isValid = false;
    let uname = unameRef.current.value;
    let pword = pwordRef.current.value;

    if (uname.trim() === "") {
      setUnameErr("Username is required");
    } else if (pword.trim() === "") {
      setUnameErr("");
      setPwordErr("Password is required");
    } else {
      isValid = true;
      setUnameErr("");
      setPwordErr("");
    }
    return isValid;
  };



    
const handleSubmit = (e) => {
  e.preventDefault();

  if (validateForm()) {
    const uname = unameRef.current.value.trim();
    const pword = pwordRef.current.value.trim();

    if (uname === "admin" && pword === "admin@123") {
      dispatch(login({ username: uname }));
      navigate("/home");
      toast.success("Login Successful", {
        theme: "colored",
        autoClose: 3000,
        position: "top-right",
      });
    } else {
      toast.error("Invalid Credentials", {
        theme: "colored",
        autoClose: 3000,
        position: "top-right",
      });
    }
  }
};

  return (
    <div className={loginStyle.loginContainer}>
        <ToastContainer />
      <div className={loginStyle.heading}>Login</div>
      <div className={loginStyle.formContainer}>
        <form onSubmit={handleSubmit}>
          <div className={loginStyle.formGroup}>
            <label htmlFor="uname">Username</label>
            <input type="text" name="uname" ref={unameRef} />
            {unameErr && <span className={loginStyle.error}>{unameErr}</span>}
          </div>
          <div className={loginStyle.formGroup}>
            <label htmlFor="pword">Password</label>
            <input type="password" name="pword" ref={pwordRef} />
            {pwordErr && <span className={loginStyle.error}>{pwordErr}</span>}
          </div>
          <button className={loginStyle.loginBtn} type="submit">
            Submit
          </button>
        </form>
        <div className={loginStyle.registerLink}>Register</div>
      </div>
    </div>
  );
}

export default Login;
