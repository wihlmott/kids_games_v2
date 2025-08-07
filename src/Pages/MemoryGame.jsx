import { useEffect, useState } from "react";
import MemoryBoard from "./MemoryBoard";
import Card from "../Components/Card";

const MemoryGame = ({ cards }) => {
    const [players, setPlayers] = useState({
        player1: { score: 0 },
        player2: { score: 0 },
        active: "player1",
    });

    const [firstSelection, setFirstSelection] = useState(null);
    const [secondSelection, setSecondSelection] = useState(null);
    const [found, setFound] = useState([]);

    const togglePlayer = () =>
        setPlayers((prev) => {
            return { ...prev, active: !prev.active };
        });

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
                              score: prev[prev.active].score + 1,
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

    return (
        <>
            <MemoryBoard togglePlayer={togglePlayer} players={players} />;
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
        </>
    );
};

const styles = {
    cardContainer: {
        textAlign: "center",
        width: "104vw",
        height: "auto",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        // boxShadow: "2px 0 10px rgba(0,0,0,.6), -2px 0 10px rgba(0,0,0,.6)",
    },
};

export default MemoryGame;
