import { useEffect, useState } from "react";
import "../styles/Game.css";
import ScoreBoard from "../components/ScoreBoard";
import CardsContainer from "../components/CardsContainer";
import shuffle from "../utils/shuffle";
import addWin from "../utils/addWin";
import ResultCard from "../components/ResultCard";
import NavBar from "../components/NavBar";

function Game() {
  const [state, setState] = useState("normal");
  const [imgs, setImgs] = useState([]);
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);

  useEffect(() => {
    fetch("https://boringapi.com/api/v1/photos/random?num=10")
      .then((res) => res.json())
      .then((data) => {
        const photos = data.photos;
        const newImgs = [];
        photos.forEach((photo) => {
          newImgs.push({ clicked: false, url: photo.url });
        });
        setImgs(newImgs);
      });
  }, []);

  useEffect(() => {
    if (state != "rematch") return;
    setScore(0);
    imgs.forEach((img) => (img.clicked = false));
    setState("normal");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  useEffect(() => {
    if (score > highestScore) {
      setHighestScore(score);
    }
  }, [score, highestScore]);

  function handleCardClick(index) {
    if (imgs[index].clicked) {
      setState("lose");
      const shuffledArray = shuffle(imgs);
      setImgs(shuffledArray);
    } else {
      const newImgs = [...imgs];
      newImgs[index].clicked = true;
      const shuffledArray = shuffle(newImgs);
      setImgs(shuffledArray);
      setScore(score + 1);
      if (newImgs.every((img) => img.clicked)) {
        setState("win");
        addWin();
      }
    }
  }

  function resetProgress() {
    setHighestScore(0);
  }

  function handleRematch() {
    setState("rematch");
  }

  return (
    <>
      <NavBar />
      <main>
        {(state == "win" || state == "lose") && (
          <ResultCard win={state} handleClick={handleRematch} />
        )}
        <ScoreBoard
          score={score}
          highestScore={highestScore}
          reset={resetProgress}
        />
        <CardsContainer imgs={imgs} handleClick={handleCardClick} />
      </main>
    </>
  );
}

export default Game;
