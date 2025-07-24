import Number from "./Number";

const Calculation = ({ number1, number2, operation }) => {
    return (
        <div
            style={{
                margin: "-250px auto 0",
                width: "100%",
                textAlign: "center",
                position: "fixed",
            }}
        >
            <Number number={number1} />
            <Number number={operation.symbol} />
            <Number number={number2} />
            <Number number={"="} />
            <Number number={"?"} />
        </div>
    );
};

export default Calculation;
