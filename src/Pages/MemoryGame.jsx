import { useEffect, useState } from "react";
import Board from "./Board";
import Card from "../Components/Card";
import { amountOfMatches, backgroundImages } from "../Config";
import EndGameSequence from "../Components/EndGameSequence";

const MemoryGame = ({ cards }) => {
    const [players, setPlayers] = useState({
        player1: { value: 0 },
        player2: { value: 0 },
        active: "player1",
    });

    const [firstSelection, setFirstSelection] = useState(null);
    const [secondSelection, setSecondSelection] = useState(null);
    const [found, setFound] = useState([]);

    const sendSelection = (text, id) => {
        if (secondSelection != null) return;

        firstSelection
            ? setSecondSelection([text, id])
            : setFirstSelection([text, id]);
    };

    const check = () =>
        firstSelection[0] == secondSelection[0]
            ? (() => {
                  setFound((prev) => [...prev, firstSelection[0]]);
                  setPlayers((prev) => {
                      return {
                          ...prev,
                          [prev.active]: {
                              value: prev[prev.active].value + 1,
                          },
                          active:
                              prev.active == "player1" ? "player1" : "player2",
                      };
                  });
              })()
            : setPlayers((prev) => {
                  return {
                      ...prev,
                      active: prev.active == "player1" ? "player2" : "player1",
                  };
              });

    const reset = () => {
        setTimeout(() => {
            setFirstSelection(null);
            setSecondSelection(null);
        }, 1000);
    };
    useEffect(() => {
        firstSelection ? check() : null;
        secondSelection ? reset() : null;
    }, [secondSelection]);

    const resetGame = () => {
        console.log(`reset`);
    };

    return (
        <>
            <Board
                backgroundImage={backgroundImages.memoryBackground}
                players={players}
                endTest={
                    players["player1"].value + players["player2"].value ==
                    amountOfMatches
                }
            />
            ;
            <div style={styles.cardContainer}>
                {cards.map((card, i) => {
                    return (
                        <Card
                            key={i}
                            sendSelection={sendSelection}
                            active={
                                (firstSelection
                                    ? firstSelection[0] == card &&
                                      firstSelection[1] == i
                                    : "") ||
                                (secondSelection
                                    ? secondSelection[0] == card &&
                                      secondSelection[1] == i
                                    : "") ||
                                found.find((el) => el == card)
                            }
                            text={card}
                            id={i}
                            type={cards[0].length < 2 ? "text" : "image"}
                        />
                    );
                })}
            </div>
            {players["player1"].value + players["player2"].value ==
                amountOfMatches && (
                <EndGameSequence
                    reset={resetGame}
                    message={
                        players.player1.value == players.player2.value
                            ? "DRAW"
                            : `Player ${
                                  players.player1.value > players.player2.value
                                      ? "1"
                                      : "2"
                              } - WINS`
                    }
                />
            )}
        </>
    );
};

const styles = {
    cardContainer: {
        boxSizing: "border-box",
        textAlign: "center",
        width: "104vw",
        height: "78vh",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        padding: "32px 0",
    },
};

export default MemoryGame;
