import { BrowserRouter, Route, Routes } from "react-router-dom";
import MathGame from "./Pages/MathGame";
import Home from "./Pages/Home";
import MemoryGame from "./Pages/MemoryGame";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route> */}
                <Route path="/" element={<Home />} />
                <Route path="MathGame" element={<MathGame />} />
                <Route path="MemoryGame" element={<MemoryGame />} />
                {/* <Route path="*" element={<NoPage />} /> */}
                {/* </Route> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
