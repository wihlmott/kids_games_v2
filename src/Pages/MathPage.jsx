import { useContext } from "react";
import Calculation from "../Components/Calculation";
import Options from "../Components/Options";
import { OperationContext } from "../Contexts";
import { backgroundImages } from "../Config";

const MathPage = ({ level, flagWrong }) => {
    const [operation, _] = useContext(OperationContext);

    const question = {
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
    };

    return (
        <div style={styles.background}>
            <Calculation
                number1={question.number1}
                number2={question.number2}
                operation={question.operation}
                answer={question.answer()}
            />
            <Options answer={question.answer()} flagWrong={flagWrong} />
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
