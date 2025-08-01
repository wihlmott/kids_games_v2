const SettingsMenu = ({ options, onSelect }) => (
    <div style={styles.menu}>
        <ul style={styles.list}>
            {options.map((option, idx) => (
                <li
                    key={idx}
                    style={styles.item}
                    onClick={() => onSelect(option)}
                >
                    {option}
                </li>
            ))}
        </ul>
    </div>
);

const styles = {
    menu: {
        background: "#222",
        color: "#fff",
        padding: "16px",
        borderRadius: "8px",
        minWidth: "200px",
    },
    list: {
        listStyle: "none",
        margin: 0,
        padding: 0,
    },
    item: {
        padding: "8px",
        cursor: "pointer",
        borderBottom: "1px solid #444",
    },
};

export default SettingsMenu;
