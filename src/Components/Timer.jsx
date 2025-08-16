import { useContext, useEffect, useState } from "react";
import { OperationContext } from "../Contexts";

const Timer = ({ time = 5000, flagTimeout }) => {
    const [operation, _] = useContext(OperationContext);

    const [color, setColor] = useState({
        color: "rgba(0,240,0,.825)",
        filled: 100,
    });

    useEffect(() => {
        if (color.filled <= 0) {
            flagTimeout();
            return;
        }

        const interval = setInterval(
            () =>
                setColor((prev) => {
                    return {
                        color: `rgba(${255 * (1 - prev.filled / 100)},${
                            240 * (prev.filled / 100)
                        },0,.825)`,
                        filled: prev.filled - 1,
                    };
                }),
            time / 100
        );

        return () => clearInterval(interval);
    }, [color]);

    useEffect(() => {
        setColor({
            color: "rgba(0,240,0,.825)",
            filled: 100,
        });
    }, [operation]);

    return (
        <div
            style={{
                zIndex: "10",
                position: "fixed",
                bottom: "40px",
                height: "40px",
                borderRadius: "8px",
                boxShadow: "3px 3px 5px rgba(0,0,0,.9)",
                width: "96vw",
                left: "50%",
                transform: "translateX(-50%)",
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    background: color.color,
                    height: "100%",
                    width: `calc(${color.filled - 18}%)`,
                    transition: "width 0.6 ease-in-out",
                }}
            />
        </div>
    );
};

export default Timer;
