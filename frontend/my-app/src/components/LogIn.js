import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/LogIn.css";
import ParticlesBackground from "./ParticlesBackground";

const LogIn = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/homepage");
    }
  });

  const handleLogin = async () => {
    if (!email || !password) {
      setError(true);
      return false;
    }

    console.log(email, password);
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "content-type": "application/json",
      },
    });

    result = await result.json();
    console.log(result);

    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/homepage");
    } else {
      alert("plase enter correct details");
    }
  };

  return (
    <div className="login-container">
      
      <ParticlesBackground/>
      <div className="login">
        <div className="login-box">
          <h1>Login yourself..!!!</h1>
          <div>
            <input
              type="text"
              placeholder="Enter your Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            {error && !email && <span>Enter Valid Email</span>}
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter your Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            {error && !password && <span>Enter Valid password</span>}
          </div>
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
