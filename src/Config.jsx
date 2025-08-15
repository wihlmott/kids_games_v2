import mathBackground from "/mathBackground.webp";
import memoryBackground from "/memoryBackground.webp";
import homeBackground from "/homeBackground.webp";
import OXOBackground from "/OXOBackground.jpg";

import bear1 from "./assets/memory_images/bear1.jpg";
import cow1 from "./assets/memory_images/cow1.jpg";
import croc1 from "./assets/memory_images/croc1.jpg";
import deer1 from "./assets/memory_images/deer1.jpg";
import elephant1 from "./assets/memory_images/elephant1.jpg";
import giraffe1 from "./assets/memory_images/giraffe1.jpg";
import hippo1 from "./assets/memory_images/hippo1.jpg";
import monkey1 from "./assets/memory_images/monkey1.jpg";
import panda1 from "./assets/memory_images/panda1.jpg";
import pig1 from "./assets/memory_images/pig1.jpg";
import rabbit1 from "./assets/memory_images/rabbit1.jpg";
import tiger1 from "./assets/memory_images/tiger1.jpg";
import zebra1 from "./assets/memory_images/zebra1.jpg";
import sheep1 from "./assets/memory_images/sheep1.jpg";
import rhino1 from "./assets/memory_images/rhino1.jpg";
import racoon1 from "./assets/memory_images/racoon1.jpg";

import DivideIcon from "./Components/DivideIcon";

export const backgroundImages = {
    mathBackground: mathBackground,
    memoryBackground: memoryBackground,
    homeBackground: homeBackground,
    OXOBackground: OXOBackground,
};

export const activeShadow = (color = "white") =>
    `drop-shadow(5px 0 3px ${color}) drop-shadow(-5px 0 3px ${color}) drop-shadow(0 5px 3px ${color}) drop-shadow(0 -5px 3px ${color})`;

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
        { title: "level 1", values: 1 },
        { title: "level 2", values: 2 },
        { title: "level 3", values: 3 },
        { title: "level 4", values: 4 },
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
        {
            title: "pictures",
            values: [
                bear1,
                cow1,
                croc1,
                deer1,
                elephant1,
                giraffe1,
                hippo1,
                monkey1,
                panda1,
                sheep1,
                pig1,
                rabbit1,
                racoon1,
                rhino1,
                tiger1,
                zebra1,
            ],
        },
    ],
};

export const amountOfMatches = 10;

export const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
