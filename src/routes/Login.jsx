import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/Login.css";

function LoginForm() {
  const [name, setName] = useState("");
  const [state, setState] = useState("logging");

  const navigate = useNavigate();

  useEffect(() => {
    if (state != "logged") return;

    localStorage.setItem("name", name);
    localStorage.setItem("winsCounter", "0");
    navigate("/home");
  }, [state]);

  function handleSubmit(e) {
    e.preventDefault();
    setState("logged");
  }

  return (
    <div className="login">
      <h2>Memory Cards</h2>
      <p>- Your Name Can't be Changed After Submition</p>
      <form onSubmit={handleSubmit}>
        <label>
          Your Name:
          <input
            type="text"
            required
            minLength={3}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default LoginForm;
