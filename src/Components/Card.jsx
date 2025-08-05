import cardFlip from "./Card.module.css";

const Card = ({
    sendSelection = () => {},
    active = false,
    text,
    id,
    type = "text",
}) => {
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
            <div style={styles.content}>
                {type === "text" ? (
                    <h1
                        className={active ? cardFlip.activeCard : cardFlip.card}
                    >
                        {text}
                    </h1>
                ) : null}
                {type === "image" ? <img src={text} alt="" /> : null}
            </div>
        </div>
    );
};

const styles = {
    card: {
        width: "80px",
        height: "120px",
        margin: "6px",
        borderRadius: "6px",
        display: "inline-block",
        background: "white",
        boxShadow: "2px 2px 5px rgba(0,0,0,.5)",
        overflow: "hidden",
    },

    content: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "24px",
        color: "#333",
    },

    text: {},
};

export default Card;
