import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/SignUp.css";
import ParticlesBackground from "./ParticlesBackground";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = React.useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  const collectData = async () => {
    if (!name || !email || !password) {
      setError(true);
      return false;
    }

    console.log(name, email, password);
    let result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json();

    console.log(result);
    localStorage.setItem("user", JSON.stringify(result));
    navigate("/homepage");
  };

  return (
    <div className="signup-container">
      <ParticlesBackground />

      <div className="signup">
        <div className="signup-box">
          <h1>SignUp yourself to continue...</h1>
          <div className="input-section">
            <div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your Name"
              />
              {error && !name && <span>Enter Valid Name</span>}
            </div>

            <div>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email Address"
              />
              {error && !email && <span>Enter Valid Email</span>}
            </div>

            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Set the Password"
              />
              {error && !password && <span>Enter Valid Password</span>}
            </div>

            <button onClick={collectData} type="button">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
