function Card({ imgUrl, handleClick }) {
  return (
    <div className="card">
      <button onClick={handleClick}>
        <img src={imgUrl} />
      </button>
    </div>
  );
}

export default Card;
