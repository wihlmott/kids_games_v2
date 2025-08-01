const SettingsMenu = ({ options, onSelect, onClose, gameMode }) => (
    <div style={styles.backdrop} onClick={onClose}>
        <div style={styles.menu}>
            <div style={styles.title}>{gameMode}</div>
            <ul style={styles.list}>
                {options.map((option, idx) => (
                    <li
                        key={idx}
                        style={styles.item}
                        onClick={() => onSelect(option)}
                    >
                        {option.title}
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

const styles = {
    backdrop: {
        position: "fixed",
        transform: "translateY(-50%)",
        left: 0,
        width: "100vw",
        height: "200vh",
        background: "rgba(0,0,0,0.5)",
        zIndex: 1000,
    },
    menu: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: "#fff",
        color: "#222",
        padding: "16px",
        borderRadius: "8px",
        minWidth: "200px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
    title: {
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: "20px",
        marginBottom: "12px",
        textAlign: "center",
        letterSpacing: "2px",
    },
    list: {
        listStyle: "none",
        margin: 0,
        padding: 0,
    },
    item: {
        padding: "8px",
        cursor: "pointer",
        borderBottom: "1px solid #ccc",
    },
};

export default SettingsMenu;
