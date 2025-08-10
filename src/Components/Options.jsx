import { useMemo } from "react";
import { shuffleArray } from "../helpers";
import Circle from "./Circle";

const Options = ({ answer, flagWrong }) => {
    const styles = {
        container: {
            position: "relative",
            left: "50%",
            marginTop: "250px",
            transform: "translateX(-50%)",
        },
    };

    const arr = useMemo(() => {
        const guessArr = shuffleArray([-3, -2, -1, 1, 2, 3]).map(
            (el) => answer + el
        );
        return shuffleArray([answer, guessArr[0], guessArr[1]]);
    }, [answer]);

    return (
        <div style={styles.container}>
            {arr.map((el) => (
                <Circle
                    key={el}
                    value={el}
                    answer={answer}
                    flagWrong={flagWrong}
                />
            ))}
        </div>
    );
};

export default Options;
