import ConfettiExplosion from "react-confetti-explosion";
import memoryBackground from "/memoryBackground.jpg";
import { amountOfMatches } from "../Config";

const MemoryBoard = ({ players }) => {
    const activeShadow =
        "drop-shadow(5px 0 3px white) drop-shadow(-5px 0 3px white) drop-shadow(0 5px 3px white) drop-shadow(0 -5px 3px white)";

    return (
        <div style={styles.background}>
            <div
                style={{
                    ...styles.playerDiv,
                    top: "0",
                    backgroundColor: `rgba(255,0,0,${
                        players.active == "player1" ? ".2" : "0"
                    })`,
                }}
            >
                <p
                    style={{
                        ...styles.text,
                        filter:
                            players.active == "player1" ? activeShadow : "none",
                        marginTop: "2rem",
                    }}
                >
                    player 1 -- {players.player1.score}
                </p>
            </div>
            {players["player1"].score + players["player2"].score ==
                amountOfMatches && (
                <ConfettiExplosion
                    force={0.8}
                    duration={3000}
                    particleCount={250}
                    width={1600}
                />
            )}
            <div
                style={{
                    ...styles.playerDiv,
                    bottom: "0",
                    backgroundColor: `rgba(0,0,255,${
                        players.active == "player2" ? ".2" : "0"
                    })`,
                }}
            >
                <p
                    style={{
                        ...styles.text,
                        bottom: "0",
                        marginBottom: "4rem",
                        filter:
                            players.active == "player2" ? activeShadow : "none",
                    }}
                >
                    player 2 -- {players.player2.score}
                </p>
            </div>
        </div>
    );
};

const styles = {
    background: {
        backgroundImage: `url(${memoryBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: ".85",
        height: "100vh",
        width: "100vw",
        position: "fixed",
        top: "0",
        zIndex: "-1",
        display: "flex",
        alignItems: "center",
    },

    playerDiv: {
        position: "absolute",
        display: "block",
        width: "100%",
        height: "50%",
    },

    text: {
        textTransform: "uppercase",
        margin: "auto",
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        fontSize: "1.5rem",
        fontWeight: "bold",
    },
};

export default MemoryBoard;
