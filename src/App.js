import { useState } from "react";
import "./App.css";

function App() {
  const [isActive, setIsActive] = useState("");
  const [winner, setWinner] = useState("");
  const [computer, setComputer] = useState("");
  const [select, setSelect] = useState(false);
  const arr = ["rock", "paper", "Scissors"];

  const checkWinner = (choice) => {
    setComputer(arr[Math.floor(Math.random() * arr.length)]);
    setIsActive(choice);

    if (choice === computer) {
      setWinner("It's a Tie");
    } else if (
      (choice === "rock" && computer === "paper") ||
      (choice === "paper" && computer === "Scissors") ||
      (choice === "Scissors" && computer === "rock")
    ) {
      setWinner("You Win");
    } else {
      setWinner("You Lose");
    }
    setSelect(true);
  };

  const reset = () => {
    setWinner("");
    setComputer("");
    setSelect(false);
    setIsActive("");
  };

  return (
    <div className="game">
      <h2>RPC</h2>
      <div className="box">
        {select === false ? <p className="select">Select one option</p> : null}
        <div>
          <button
            className={` ${isActive === "rock" ? "active" : ""}`}
            onClick={() => checkWinner("rock")}
          >
            ROCK
          </button>
          <button
            className={` ${isActive === "paper" ? "active" : ""}`}
            onClick={() => checkWinner("paper")}
          >
            PAPER
          </button>
          <button
            className={`] ${isActive === "Scissors" ? "active" : ""}`}
            onClick={() => checkWinner("Scissors")}
          >
            SCISSORS
          </button>
        </div>
        {select === true ? (
          <>
            <p className="select">{winner}</p>
            <p className="select">Computer: {computer}</p>
            <button className="bottom" onClick={() => reset()}>
              Click to play
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default App;
