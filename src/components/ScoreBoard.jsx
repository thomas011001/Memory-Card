function ScoreBoard({ score, highestScore }) {
  return (
    <div className="score-board">
      Score:
      <div>
        Current: {score} Highest: {highestScore}
      </div>
    </div>
  );
}

export default ScoreBoard;
