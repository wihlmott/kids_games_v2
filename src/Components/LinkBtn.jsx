import { useState } from "react";
import { Link } from "react-router-dom";

import Btn from "./Btn";
import SettingsBtn from "./SettingsBtn";
import SettingsMenu from "./SettingsMenu";

const LinkBtn = ({ to, text, onClick, transparent = true }) => {
    const [openSettings, setOpenSettings] = useState(false);

    const handleSettings = () => {
        console.log("Settings button clicked " + text);

        setOpenSettings(!openSettings);
    };

    return (
        <div style={{ margin: "auto", width: "fit-content" }}>
            <Link
                to={to}
                style={{
                    textDecoration: "none",
                    color: "black",
                    display: "inline-block",
                }}
            >
                <Btn text={text} onClick={onClick} transparent={transparent} />
            </Link>
            <SettingsBtn onClick={handleSettings} />
            {openSettings && <SettingsMenu options={["numbers", "pictures"]} />}
        </div>
    );
};

export default LinkBtn;
