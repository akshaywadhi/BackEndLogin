import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";
import "./Signup.css";
import axios from "axios";

export default function Signup() {
  const [addUser, setAddUser] = useState({
    name: "",
    email: "",
    number: null,
    password: "",
  });

  const [show, setShow] = useState(false);

  function showButton() {
    setShow(!show);
  }

  function handleChange(e) {
    setAddUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function focus(){
    document.querySelector('.error').textContent = ''
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if(addUser.name === '' || addUser.email === '' || addUser.number === '' || addUser.password === ''){
      document.querySelector('.error').textContent = 'Please Fill In Complete Form'
    }

    else{
      try {
        const data = await axios.post("http://localhost:3000/users/adduser", {
          ...addUser,
        });
  document.querySelector('.error').textContent = 'User Has Been Added'
  setAddUser({
    name : '',
    email : '',
    number : '',
    password : ''
  })
        console.log(data.data);
      } catch (err) {
        console.log(err);
      }
    }
   
  }

  return (
    <>
      <Navbar />
      <div className="signup-container">
        <div className="signup-content">
          <form className="signup-form" onSubmit={handleSubmit}>
            <input
            onFocus={focus}
              name="name"
              value={addUser.name}
              type="text"
              placeholder="Enter Your Name"
              onChange={handleChange}
            />
            <input
               onFocus={focus}
              name="email"
              value={addUser.email}
              type="text"
              placeholder="Enter Your Email"
              onChange={handleChange}
            />
            <input
               onFocus={focus}
              name="number"
              value={addUser.number}
              type="number"
              placeholder="Enter Your Number"
              onChange={handleChange}
            />

            <div className="password-container">
              <input
                 onFocus={focus}
                name="password"
                value={addUser.password}
                type={show ? "password" : "text"}
                placeholder="Enter Your Password"
                onChange={handleChange}
              />

              <div className="password-content">
                {show ? (
                  <i onClick={showButton} className="fa-solid fa-eye"></i>
                ) : (
                  <i onClick={showButton} className="fa-solid fa-eye-slash"></i>
                )}
              </div>
            </div>
            <h4 className='error' style={{color: 'red'}}></h4>
            <button>Signup</button>
          </form>
        </div>
      </div>
    </>
  );
}
