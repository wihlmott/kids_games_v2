import { useState } from "react";
import Block from "../Components/Block.jsx";
import { backgroundImages, winConditions } from "../Config";
import Board from "./Board.jsx";
import EndGameSequence from "../Components/EndGameSequence.jsx";

const defaultState = {
    players: {
        player1: { value: "X", selected: [] },
        player2: { value: "O", selected: [] },
        active: "player1",
    },
    winningArr: [],
    runEnd: { status: false, winner: "" },
};

const OXOGame = () => {
    const indexes = Array.from({ length: 9 }, (_, i) => null);

    const [players, setPlayers] = useState(defaultState.players);
    const [winningArr, setWinningArr] = useState(defaultState.winningArr);
    const [runEnd, setRunEnd] = useState(defaultState.runEnd);

    const reset = () => {
        setPlayers(defaultState.players);
        setWinningArr(defaultState.winningArr);
        setRunEnd(defaultState.runEnd);

        window.location.reload(true); //not resetting blocks, forcing page reload. -- find better solution
    };

    const checkWin = (i) => {
        if (players[players.active].selected.length < 2) return false;

        const currentArr = [...players[players.active].selected, i];

        return winConditions.some((condition) => {
            condition.every((index) => currentArr.includes(index)) &&
                (() => {
                    setWinningArr(condition);
                    setRunEnd({
                        status: true,
                        winner: players[players.active].value,
                    });
                })();

            return condition.every((index) => currentArr.includes(index));
        });
    };

    const updateSelection = (i) => {
        checkWin(i);

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
        if (runEnd.status) return;

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
                endTest={runEnd.status}
            />
            <div style={styles.grid}>
                {indexes.map((el, i) => {
                    return (
                        <Block
                            key={i}
                            playerValue={players.active}
                            togglePlayer={togglePlayer}
                            index={i}
                            green={winningArr.includes(i)}
                        />
                    );
                })}
            </div>
            {runEnd.status && (
                <EndGameSequence
                    reset={reset}
                    message={`${runEnd.winner} - WINS`}
                />
            )}
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
