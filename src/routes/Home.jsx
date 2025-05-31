import { Link } from "react-router-dom";
import "../styles/Home.css";
import NavBar from "../components/NavBar";

function Home() {
  const name = localStorage.getItem("name");
  const wins = localStorage.getItem("winsCounter");

  return (
    <>
      <NavBar />
      <main>
        <div className="home">
          <h2>Hello {name}!</h2>
          <h3>You Won {wins} Games Till Now!</h3>
          <Link to={"/game"}>Start A Game</Link>
        </div>
      </main>
    </>
  );
}

export default Home;
