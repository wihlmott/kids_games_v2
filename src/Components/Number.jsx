const Number = ({ number }) => {
    return <div style={styles.number}>{number}</div>;
};

const styles = {
    number: {
        width: "auto",
        display: "inline",
        filter: "drop-shadow(6px 0 4px white) drop-shadow(-6px 0 4px white) drop-shadow(0 6px 4px white) drop-shadow(0 -6px 4px white)",
        fontWeight: "bold",
        fontSize: "6rem",
    },
};

export default Number;
