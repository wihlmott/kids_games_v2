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

export const gameModesConfig = {
    "math game": [
        { title: "level 1", value: 1 },
        { title: "level 2", value: 2 },
        { title: "level 3", value: 3 },
        { title: "level 4", value: 4 },
    ],
    "memory game": [
        {
            title: "letters",
            values: [
                "A",
                "B",
                "C",
                "D",
                "E",
                "F",
                "G",
                "H",
                "I",
                "J",
                "K",
                "L",
                "M",
                "N",
                "O",
                "P",
                "Q",
                "R",
                "S",
                "T",
                "U",
                "V",
                "W",
                "X",
                "Y",
                "Z",
            ],
        },
        { title: "pictures", values: [] },
    ],
};
