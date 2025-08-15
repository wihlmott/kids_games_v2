import { useNavigate } from "react-router-dom";
import BackArrowIcon from "./BackArrowIcon";
import RefreshIcon from "./RefreshIcon";

import { activeShadow } from "../Config";
import { useEffect, useState } from "react";

const EndGameSequence = ({ reset, message = "Game Over" }) => {
    const navigate = useNavigate();
    const goHome = () => navigate("/");

    const [open, setOpen] = useState(false);
    useEffect(() => {
        setTimeout(() => setOpen(true), message == "Game Over" ? 0 : 600);
    }, []);

    const styles = {
        overlay: {
            position: "fixed",
            transform: `translateY(${open ? "0" : "100%"})`,
            height: "100vh",
            width: "100vw",
            backgroundColor: `${
                message == "Game Over"
                    ? `rgba(246, 85, 85, 0.25)`
                    : `rgba(255, 255, 255, 0.3)`
            }`,
            transition: "transform .8s ease-in",
        },
        buttonsDiv: {
            boxSizing: "border-box",
            display: "flex",
            justifyContent: "center",
            borderRadius: "30px",
            padding: "20px",
            backgroundColor: "#fff",
            boxShadow: "2px 2px 12px rgba(0,0,0,.75)",
            width: "144px",
            margin: "10px auto",
        },
        button: {
            borderRadius: "50%",
            border: "none",
            boxShadow:
                "inset 0px 0px 2px rgba(0,0,0,.2), 0 0 6px rgba(0,0,0,.3)",
            padding: "20px",
            width: "65px",
            height: "65px",
            textAlign: "center",
            margin: "-12px 2px",
        },
    };

    return (
        <div style={styles.overlay}>
            <p
                style={{
                    fontWeight: "bold",
                    fontSize: "42px",
                    textAlign: "center",
                    margin: "150px 0 0 0",
                    filter: activeShadow(
                        message == "Game Over" ? "red" : "lime"
                    ),
                }}
            >
                {message}
            </p>
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

export default EndGameSequence;
