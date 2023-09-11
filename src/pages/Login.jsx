import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  loginAPICall,
  saveLoggedInUser,
  storeToken,
} from "../services/AuthService";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleLoginForm(event) {
    event.preventDefault();

    await loginAPICall(email, password)
      .then((response) => {
        console.log(response.data);

        const token = "Bearer " + response.data.accessToken;
        storeToken(token);

        saveLoggedInUser(email);
        navigate("/home");

        window.location.reload(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <>
      <div>
        <h2>Login</h2>
        <form>
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
            <button onClick={(event) => handleLoginForm(event)}>Log in</button>
          </div>
        </form>
      </div>
      <hr />
      <div>
        <h2>Not a member yet?</h2>
        <Link to="registration">Join now</Link>
      </div>
    </>
  );
};

export default Login;
