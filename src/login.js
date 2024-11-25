import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Username: ", username);
    console.log("Password: ", password);
  };

  return (
    <div className="login">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsername}
            />
            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePassword}
            />
            <button type="submit">Login</button>
        </form>
    </div>
  );
}   
export default Login;