import { useContext, useEffect, useState } from "react";
import { OperationContext } from "../Contexts";
import ConfettiExplosion from "react-confetti-explosion";

const Circle = ({ value, answer }) => {
    const [operation, setOperation] = useContext(OperationContext);
    const [clicked, setClicked] = useState(false);
    const [explosion, setExplosion] = useState(false);

    useEffect(() => setClicked(false), [operation]);

    const styles = {
        circle: {
            cursor: "pointer",
            borderRadius: "50%",
            padding: "6px",
            display: "inline-block",
            width: "5rem",
            height: "5rem",
            boxShadow: "1px 1px 2px rgba(0,0,0,.3)",
            fontSize: "5rem",
            fontWeight: "bold",
            textAlign: "center",
            margin: "6px",
        },
        text: {
            display: "inline",
            filter: "drop-shadow(2px 2px 3px rgba(0,0,0,.5))",
        },
    };

    const handleClick = () => {
        setClicked(value);
        if (value === answer) {
            setExplosion(true);
            setTimeout(() => {
                setOperation((prev) => {
                    return { ...prev, amount: prev.amount + 1 };
                });
                setExplosion(false);
            }, 1000);
        }
    };

    return (
        <div
            style={{
                ...styles.circle,
                backgroundColor:
                    value !== clicked
                        ? "white"
                        : value === answer
                        ? "lime"
                        : "red",
            }}
            onClick={handleClick}
        >
            {explosion && <ConfettiExplosion />}
            <p style={styles.text}>{value}</p>
        </div>
    );
};

export default Circle;
