import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerAPICall } from "../services/AuthService";

const Register = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [matchingPassword, setMatchingPassword] = useState("");

  const navigate = useNavigate();

  const handleRegistrationForm = (event) => {
    event.preventDefault();

    const register = { name, surname, email, password, matchingPassword };

    registerAPICall(register)
      .then((response) => {
        console.log(response.data);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <h3>Registration Form</h3>
      <form>
        <div>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <br />
          <label>First name</label>
        </div>

        <div>
          <input
            type="text"
            name="surname"
            value={surname}
            onChange={(event) => setSurname(event.target.value)}
          />
          <br />
          <label>Last name</label>
        </div>

        <div>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <br />
          <label>Email</label>
        </div>

        <div>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <br />
          <label>Password</label>
        </div>

        <div>
          <input
            type="password"
            name="matchingPassword"
            value={matchingPassword}
            onChange={(event) => setMatchingPassword(event.target.value)}
          />
          <br />
          <label>Matching Password</label>
        </div>

        <div>
          <button onClick={(event) => handleRegistrationForm(event)}>
            Create an account
          </button>
          <Link to="/">Back to login page</Link>
        </div>
      </form>
    </>
  );
};

export default Register;
