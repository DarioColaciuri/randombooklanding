import React from "react";
import Button from "../ui/Button";
import songs from "../utils/songs.json";
import { useState } from "react";
import "../css/random.css";

const Random = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const [displayedSong, setDisplayedSong] = useState("");
  const [isSpinning, setIsSpinning] = useState(false);

  const getRandomSong = () => {
    const randomIndex = Math.floor(Math.random() * songs.length);
    return songs[randomIndex];
  };

  const handleButtonClick = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setCurrentSong(null);
    let spinCount = 0;

    const spinInterval = setInterval(() => {
      const song = getRandomSong();
      setDisplayedSong(`${song.song} - ${song.artist} - ${song.page}`);
      spinCount += 1;

      if (spinCount > 20) {
        clearInterval(spinInterval);
        setTimeout(() => {
          setCurrentSong(song);
          setIsSpinning(false);
        }, 0);
      }
    }, 100);
  };

  return (
    <>
      <Button onClick={handleButtonClick} />
      <div className={`result ${isSpinning ? "spinning" : ""}`}>
        {isSpinning
          ? displayedSong
          : currentSong
          ? `${currentSong.song} - ${currentSong.artist} - ${currentSong.page}`
          : ""}
      </div>
    </>
  );
};

export default Random;
