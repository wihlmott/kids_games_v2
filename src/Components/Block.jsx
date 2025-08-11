import { useState } from "react";

const Block = ({ playerValue, togglePlayer, index }) => {
    const [value, setValue] = useState("");

    const handleClick = () => {
        if (value) return;
        setValue(playerValue == "player1" ? "X" : "O");
        togglePlayer(playerValue, index);
    };

    return (
        <div
            style={{
                width: "80px",
                height: "80px",
                borderRadius: "5px",
                boxShadow: "2px 2px 5px rgba(0,0,0,.5)",
                boxSizing: "border-box",
                margin: "5px 5px 0 0",
                backgroundColor: "rgba(255,255,255,.85)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2rem",
                fontWeight: "bold",
                textShadow: "2px 2px 5px rgba(0,0,0,.5)",
            }}
            onClick={handleClick}
        >
            {value}
        </div>
    );
};

export default Block;
