function ScoreBoard({ score, highestScore, reset }) {
  return (
    <div className="score-board">
      Score:
      <div>
        Current: {score} Highest: {highestScore}
      </div>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default ScoreBoard;
