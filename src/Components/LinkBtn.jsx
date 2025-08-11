import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Btn from "./Btn";
import SettingsMenu from "./SettingsMenu";
// import SettingsBtn from "./SettingsBtn";

import { gameModesConfig } from "../Config";
import { SettingsContext } from "../Contexts";

const LinkBtn = ({
    to,
    text,
    onClick,
    transparent = true,
    settings = true,
}) => {
    const navigate = useNavigate();

    const [_, setGameSettings] = useContext(SettingsContext);
    const [openSettings, setOpenSettings] = useState(false);

    const handleSettingsOpen = () => setOpenSettings(!openSettings);

    const handleSettingsSelect = (e) => {
        setGameSettings({ GameMode: text, options: e });
        navigate(to);
    };

    return (
        <div style={{ margin: "auto", width: "fit-content" }}>
            <Link
                to={!settings ? to : "/"}
                style={{
                    textDecoration: "none",
                    color: "black",
                    display: "inline-block",
                }}
                onClick={handleSettingsOpen}
            >
                <Btn text={text} onClick={onClick} transparent={transparent} />
            </Link>
            {/* <SettingsBtn onClick={handleSettingsOpen} /> */}
            {settings && openSettings && (
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
