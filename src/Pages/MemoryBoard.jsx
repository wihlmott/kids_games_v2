import memoryBackground from "/memoryBackground.jpg";

const MemoryBoard = ({ togglePlayer, players }) => {
    const handleClick = () => togglePlayer(); //cause to toggle only on incorrect selection

    const activeShadow =
        "drop-shadow(5px 0 3px white) drop-shadow(-5px 0 3px white) drop-shadow(0 5px 3px white) drop-shadow(0 -5px 3px white)";

    return (
        <div style={styles.background} onClick={handleClick}>
            <div
                style={{
                    ...styles.playerDiv,
                    top: "0",
                    backgroundColor: `rgba(0,0,0,${
                        players.active ? ".2" : "0"
                    })`,
                }}
            >
                <p
                    style={{
                        ...styles.text,
                        filter: players.active ? activeShadow : "none",
                    }}
                >
                    player 1 -- {players.player1.score}
                </p>
            </div>
            <div
                style={{
                    ...styles.playerDiv,
                    bottom: "0",
                    backgroundColor: `rgba(0,0,0,${
                        !players.active ? ".2" : "0"
                    })`,
                }}
            >
                <p
                    style={{
                        ...styles.text,
                        bottom: "0",
                        filter: !players.active ? activeShadow : "none",
                    }}
                >
                    player 2 -- {players.player1.score}
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
