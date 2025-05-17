import { useEffect, useState } from "react";
import "./App.css";
import ScoreBoard from "./components/ScoreBoard";
import CardsContainer from "./components/CardsContainer";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [state, setState] = useState("normal");
  const [imgs, setImgs] = useState([]);
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(
    parseInt(localStorage.getItem("highestScore"))
  );
  const [tryNumber, setTryNumber] = useState(0);

  useEffect(() => {
    localStorage.setItem("highestScore", `${highestScore}`);
  }, [highestScore]);

  useEffect(() => {
    if (!localStorage.getItem("highestScore")) {
      localStorage.setItem("highestScore", "0");
    }

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
    setScore(0);
    imgs.forEach((img) => (img.clicked = false));
    setState("normal");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tryNumber]);

  useEffect(() => {
    if (score > highestScore) {
      setHighestScore(score);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score]);

  function handleCardClick(index) {
    const shuffle = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    if (imgs[index].clicked) {
      setState("lose");
      const shuffledArray = shuffle(imgs);
      setImgs(shuffledArray);
      setTryNumber(tryNumber + 1);
    } else {
      const newImgs = [...imgs];
      newImgs[index].clicked = true;
      const shuffledArray = shuffle(newImgs);
      setImgs(shuffledArray);
      setScore(score + 1);
      if (newImgs.every((img) => img.clicked)) {
        setState("win");
        setTryNumber(tryNumber + 1);
      }
    }
  }

  return (
    <main>
      <header>
        <h1>Memory Card</h1>
        <ScoreBoard score={score} highestScore={highestScore} />
      </header>
      <CardsContainer imgs={imgs} handleClick={handleCardClick} />
    </main>
  );
}

export default App;
