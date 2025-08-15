import ConfettiExplosion from "react-confetti-explosion";
import { activeShadow } from "../Config";

const Board = ({ backgroundImage, players, endTest }) => {
    const styles = {
        background: {
            backgroundImage: `url(${backgroundImage})`,
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
        name: {
            position: "absolute",
            height: "10vh",
            width: "100%",
        },

        playerDiv: {
            position: "absolute",
            display: "block",
            width: "100%",
            height: "50%",
        },

        text: {
            textTransform: "uppercase",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "1.5rem",
            fontWeight: "bold",
            margin: "0",
        },
    };

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
                <div style={styles.name}>
                    <p
                        style={{
                            ...styles.text,
                            bottom: "0",
                            filter:
                                players.active == "player1"
                                    ? activeShadow()
                                    : "none",
                        }}
                    >
                        player 1 -- {players.player1.value}
                    </p>
                </div>
            </div>
            {endTest && (
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
                <div style={{ ...styles.name, bottom: "0" }}>
                    <p
                        style={{
                            ...styles.text,
                            top: "0",
                            filter:
                                players.active == "player2"
                                    ? activeShadow()
                                    : "none",
                        }}
                    >
                        player 2 -- {players.player2.value}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Board;
