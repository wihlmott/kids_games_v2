const Btn = ({ text, onClick, transparent = true }) => {
    return (
        <div
            style={{
                boxShadow: "1px 1px 5px rgba(0,0,0,.4)",
                backgroundColor: transparent ? "rgba(0,0,0,.1)" : "white",
                marginTop: "12px",
                width: "200px",
                padding: "4px 12px",
                borderRadius: "4px",
                cursor: "pointer",
                textAlign: "center",
                textTransform: "capitalize",
                textShadow: "1px 1px 2px rgba(0,0,0,.2)",
                fontSize: "1.5rem",
            }}
            onClick={onClick}
        >
            {text}
        </div>
    );
};

export default Btn;
