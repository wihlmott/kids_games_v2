import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MathGame from "./Pages/MathGame";
import Home from "./Pages/Home";
import MemoryGame from "./Pages/MemoryGame";
import { SettingsContext } from "./Contexts";
import { doubleAndShuffle } from "./helpers";
import { amountOfMatches } from "./Config";
import OXOGame from "./Pages/OXOGame";

function App() {
    const [gameSettings, setGameSettings] = useState({
        gameMode: "Game",
        options: { title: "", values: [] },
    });

    const [cards, setCards] = useState([]);
    const [level, setLevel] = useState(1);

    useEffect(() => {
        const values = gameSettings.options.values;

        values.length > 1
            ? setCards(doubleAndShuffle(values, amountOfMatches))
            : setLevel(values);
    }, [gameSettings]);

    return (
        <BrowserRouter>
            <SettingsContext.Provider value={[gameSettings, setGameSettings]}>
                <Routes>
                    {/* <Route> */}
                    <Route path="/" element={<Home />} />
                    <Route
                        path="MathGame"
                        element={<MathGame level={level} />}
                    />
                    <Route
                        path="MemoryGame"
                        element={<MemoryGame cards={cards} />}
                    />
                    <Route path="OXOGame" element={<OXOGame />} />
                    {/* <Route path="*" element={<NoPage />} /> */}
                    {/* </Route> */}
                </Routes>
            </SettingsContext.Provider>
        </BrowserRouter>
    );
}

export default App;
