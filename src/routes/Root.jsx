import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Root() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("name")) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return null;
}

export default Root;
