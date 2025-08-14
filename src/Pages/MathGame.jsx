import { useMemo, useState } from "react";
import MathPage from "./MathPage";
import Header from "../Components/Header";
import { OperationContext } from "../Contexts";
import EndGameSequence from "../Components/EndGameSequence";

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

    const reset = () => {
        console.log(`reset`);
    };

    const question = useMemo(() => {
        return {
            number1: Math.round(Math.random() * level * 5),
            number2: Math.round(Math.random() * level * 5),
            operation: operation,
            answer: function () {
                switch (operation.value) {
                    case "+":
                        return this.number1 + this.number2;
                    case "-":
                        return this.number1 - this.number2;
                    case "*":
                        return this.number1 * this.number2;
                    case "/":
                        return this.number1 / this.number2;

                    default:
                        break;
                }
            },
            guessArr: function () {
                const guessArr = shuffleArray([-3, -2, -1, 1, 2, 3]).map(
                    (el) => answer + el
                );
                return shuffleArray([answer, guessArr[0], guessArr[1]]);
            },
        };
    }, [operation]);

    const flagWrong = () => {
        setHeart((prev) => ({
            ...prev,
            first: prev.second ? true : false,
            second: prev.third ? true : false,
            third: false,
        }));
    };

    return (
        <OperationContext.Provider value={[operation, setOperation]}>
            <Header heart={heart} />
            <MathPage question={question} flagWrong={flagWrong} />
            {heart.first == false && <EndGameSequence reset={reset} />}
        </OperationContext.Provider>
    );
};

export default MathGame;
