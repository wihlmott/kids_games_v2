import { createContext } from "react";

export const OperationContext = createContext({
    title: "addition",
    value: "+",
    symbol: "+",
});

export const HeartContext = createContext({
    first: true,
    second: true,
    third: true,
});

export const SettingsContext = createContext({
    gameMode: "Game",
    options: { title: "", values: [] },
});
