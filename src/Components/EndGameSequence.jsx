import { useNavigate } from "react-router-dom";
import BackArrowIcon from "./BackArrowIcon";
import RefreshIcon from "./RefreshIcon";

const EndGameSequence = ({ reset, message = "Game Over" }) => {
    const navigate = useNavigate();
    const goHome = () => navigate("/");

    return (
        <div style={styles.overlay}>
            {message}
            <div style={styles.buttonsDiv}>
                <button style={styles.button} onClick={reset}>
                    <RefreshIcon />
                </button>
                <button style={styles.button} onClick={goHome}>
                    <BackArrowIcon />
                </button>
            </div>
        </div>
    );
};

const styles = {
    overlay: {
        position: "fixed",
        height: "100vh",
        width: "100vw",
        backgroundColor: "rgba(255,255,255,.3)",
    },
    buttonsDiv: {
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        borderRadius: "30px",
        padding: "20px",
        backgroundColor: "#fff",
        boxShadow: "inset 1px 1px 4px rgba(0,0,0,.2) 0 2px 6px rgba(0,0,0,.6)",
        width: "144px",
        margin: "140px auto 0 auto",
    },
    button: {
        borderRadius: "50%",
        border: "none",
        boxShadow: "2px 2px 8px  rgba(0,0,0,.2)",
        padding: "20px",
        width: "65px",
        height: "65px",
        textAlign: "center",
        margin: "-12px 2px",
    },
};

export default EndGameSequence;
