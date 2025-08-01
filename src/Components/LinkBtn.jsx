import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Btn from "./Btn";
import SettingsBtn from "./SettingsBtn";
import SettingsMenu from "./SettingsMenu";

import { gameModesConfig } from "../Config";
import { SettingsContext } from "../Contexts";

const LinkBtn = ({ to, text, onClick, transparent = true }) => {
    const navigate = useNavigate();

    const [_, setGameSettings] = useContext(SettingsContext);
    const [openSettings, setOpenSettings] = useState(false);

    const handleSettingsOpen = () => setOpenSettings(!openSettings);

    const handleSettingsSelect = (e) => {
        setGameSettings({ GameMode: text, options: e });
        navigate(to);

        console.log("Selected settings for", text);
        console.table(e);
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
            <SettingsBtn onClick={handleSettingsOpen} />
            {openSettings && (
                <SettingsMenu
                    options={gameModesConfig[text]}
                    gameMode={text}
                    onSelect={handleSettingsSelect}
                    onClose={() => setOpenSettings(false)}
                />
            )}
        </div>
    );
};

export default LinkBtn;
