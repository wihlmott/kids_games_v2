const SettingsBtn = ({ onClick }) => (
    <div onClick={onClick} style={styles.icon}>
        ⚙️
    </div>
);

const styles = {
    icon: {
        background: "transparent",
        color: "white",
        cursor: "pointer",
        padding: "8px",
        fontSize: "24px",
        display: "inline",
        filter: " drop-shadow(2px 0 5px rgba(255, 255, 255, 1))",
    },
};

export default SettingsBtn;
