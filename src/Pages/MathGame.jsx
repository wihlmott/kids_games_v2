import { useState } from "react";
import MathPage from "./MathPage";
import Header from "../Components/Header";
import { OperationContext } from "../Contexts";

const MathGame = ({ level }) => {
    const [operation, setOperation] = useState({
        title: "addition",
        value: "+",
        symbol: "+",
        amount: 0,
    });

    return (
        <OperationContext.Provider value={[operation, setOperation]}>
            <Header />
            <MathPage level={level} />
        </OperationContext.Provider>
    );
};

export default MathGame;
