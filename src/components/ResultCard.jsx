import { Link } from "react-router-dom";

function ResultCard({ win, handleClick }) {
  return (
    <>
      <div className="blur"></div>
      <div className="result">
        <h1>You {win == "win" ? "Won" : "Lost"}</h1>
        <div className="btns">
          <button onClick={handleClick}>Play Again</button>
          <button>
            <Link to="/home">Home Page</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default ResultCard;
