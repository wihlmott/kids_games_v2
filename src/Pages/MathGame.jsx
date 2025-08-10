import React, { useState } from "react";
import MathPage from "./MathPage";
import Header from "../Components/Header";
import { HeartContext, OperationContext } from "../Contexts";

const MemoMathPage = React.memo(MathPage);

const MathGame = ({ level }) => {
    const [operation, setOperation] = useState({
        title: "addition",
        value: "+",
        symbol: "+",
        amount: 0,
    });
    const [heart, setHeart] = useState({
        first: true,
        second: true,
        third: true,
    });

    return (
        <OperationContext.Provider value={[operation, setOperation]}>
            <HeartContext.Provider value={[heart, setHeart]}>
                <Header />
                <MemoMathPage level={level} />
            </HeartContext.Provider>
        </OperationContext.Provider>
    );
};

export default MathGame;
