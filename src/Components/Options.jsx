import { shuffleArray } from "../helpers";
import Circle from "./Circle";

const Options = ({ answer }) => {
    const styles = {
        container: {
            position: "relative",
            left: "50%",
            marginTop: "250px",
            transform: "translateX(-50%)",
        },
    };
    const guessArr = shuffleArray([-3, -2, -1, 1, 2, 3]).map(
        (el) => answer + el
    );
    const arr = shuffleArray([answer, guessArr[0], guessArr[1]]);

    return (
        <div style={styles.container}>
            {arr.map((el) => (
                <Circle key={el} value={el} answer={answer} />
            ))}
        </div>
    );
};

export default Options;
