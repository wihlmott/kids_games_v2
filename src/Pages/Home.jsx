import homeBackground from "/homeBackground.jpg";

import LinkBtn from "../Components/LinkBtn";

const Home = () => {
    return (
        <div style={styles.background}>
            <div style={styles.buttonsContainer}>
                <LinkBtn to="MathGame" text={"math game"} transparent={false} />

                <LinkBtn
                    to="MemoryGame"
                    text={"memory game"}
                    transparent={false}
                />
            </div>
        </div>
    );
};

const styles = {
    background: {
        backgroundImage: `url(${homeBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: ".85",
        height: "100vh",
        width: "100vw",
        zIndex: "-1",
        alignItems: "center",
    },
    buttonsContainer: {
        width: "100vw",
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
    },
};

export default Home;
