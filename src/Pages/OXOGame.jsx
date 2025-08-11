import { use, useEffect, useState } from "react";
import Block from "../Components/Block.jsx";
import { backgroundImages } from "../Config";
import Board from "./Board.jsx";

const OXOGame = () => {
    const indexes = Array.from({ length: 9 }, (_, i) => null);

    const [players, setPlayers] = useState({
        player1: { value: "X", selected: [] },
        player2: { value: "O", selected: [] },
        active: "player1",
    });
    const [test, setTest] = useState(false);

    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const checkWin = (i) => {
        if (players[players.active].selected.length < 2) return false;

        const currentArr = [...players[players.active].selected, i];

        return winConditions.some((condition) =>
            condition.every((index) => currentArr.includes(index))
        );
    };

    const updateSelection = (i) => {
        checkWin(i) && setTest(true);

        setPlayers((prev) => {
            return {
                ...prev,
                [prev.active]: {
                    value: prev[prev.active].value,
                    selected: [...prev[prev.active].selected, i],
                },
            };
        });
    };

    const togglePlayer = (_, i) => {
        updateSelection(i);
        if (test) return;

        setPlayers((prev) => ({
            ...prev,
            active: prev.active === "player1" ? "player2" : "player1",
        }));
    };

    return (
        <>
            <Board
                backgroundImage={backgroundImages.OXOBackground}
                players={players}
                endTest={test}
            />
            <div style={styles.grid}>
                {indexes.map((el, i) => {
                    return (
                        <Block
                            key={i}
                            playerValue={players.active}
                            togglePlayer={togglePlayer}
                            index={i}
                        />
                    );
                })}
            </div>
        </>
    );
};

const styles = {
    grid: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        width: "255px",
        height: "255px",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
    },
};

export default OXOGame;
