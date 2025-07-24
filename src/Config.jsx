import DivideIcon from "./Components/DivideIcon";

export const operationsConfig = [
    { title: "addition", value: "+", symbol: "+", amount: 0 },
    { title: "subtraction", value: "-", symbol: "-", amount: 0 },
    { title: "multiplication", value: "*", symbol: "x", amount: 0 },
    {
        title: "division",
        value: "/",
        symbol: function () {
            return <DivideIcon />;
        },
        amount: 0,
    },
    { title: "random", value: "+", symbol: "+", amount: 0 },
];
