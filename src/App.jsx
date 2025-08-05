import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MathGame from "./Pages/MathGame";
import Home from "./Pages/Home";
import MemoryGame from "./Pages/MemoryGame";
import { SettingsContext } from "./Contexts";
import { doubleAndShuffle } from "./helpers";
import { gameModesConfig } from "./Config";

function App() {
    const [gameSettings, setGameSettings] = useState({
        gameMode: "Game",
        options: { title: "", values: [] },
    });

    const [cards, setCards] = useState(
        doubleAndShuffle(gameModesConfig["memory game"][0].values, 6)
    );
    useEffect(() => {
        console.log("Game settings updated:", gameSettings);
        console.table(gameSettings.options);

        setCards(doubleAndShuffle(gameSettings.options.values, 6));
        console.log("Cards for Memory Game:", cards);
    }, [gameSettings]);

    return (
        <BrowserRouter>
            <SettingsContext.Provider value={[gameSettings, setGameSettings]}>
                <Routes>
                    {/* <Route> */}
                    <Route path="/" element={<Home />} />
                    <Route path="MathGame" element={<MathGame />} />
                    <Route
                        path="MemoryGame"
                        element={<MemoryGame cards={cards} />}
                    />
                    {/* <Route path="*" element={<NoPage />} /> */}
                    {/* </Route> */}
                </Routes>
            </SettingsContext.Provider>
        </BrowserRouter>
    );
}

export default App;
