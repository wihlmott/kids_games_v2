import Calculation from "../Components/Calculation";
import Options from "../Components/Options";
import { backgroundImages } from "../Config";

const MathPage = ({ question, flagWrong }) => {
    return (
        <div style={styles.background}>
            <Calculation
                number1={question.number1}
                number2={question.number2}
                operation={question.operation}
                answer={question.answer()}
            />
            <Options
                answer={question.answer()}
                guessArr={question.guessArr}
                flagWrong={flagWrong}
            />
        </div>
    );
};

const styles = {
    background: {
        backgroundImage: `url(${backgroundImages.mathBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: ".85",
        height: "100vh",
        width: "100vw",
        position: "fixed",
        top: "0",
        zIndex: "-1",
        display: "flex",
        alignItems: "center",
    },
};

export default MathPage;
