import cardFlip from "./Card.module.css";

const Card = ({ sendSelection = () => {}, active = false, text, id }) => {
    const handleClick = () => {
        if (active) return;
        sendSelection(text, id);
    };

    return (
        <div
            className={active ? cardFlip.activeCard : cardFlip.card}
            style={styles.card}
            onClick={handleClick}
        >
            <h1
                style={{
                    position: "absolute",
                    display: "inline",
                    inset: "0",
                    margin: "auto",
                    top: "0",
                    transform: "translateY(35%)",
                }}
            >
                {text}
            </h1>
            {/* <img></img> */}
        </div>
    );
};

const styles = {
    card: {
        width: "100px",
        height: "150px",
        margin: "6px",
        borderRadius: "6px",
        display: "inline-block",
        background: "white",
        boxShadow: "2px 2px 5px rgba(0,0,0,.5)",
    },
};

export default Card;
