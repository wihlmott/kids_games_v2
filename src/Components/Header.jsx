import { useContext, useState } from "react";
import { OperationContext } from "../Contexts";
import Btn from "./Btn";
import { operationsConfig } from "../Config.jsx";
import HeartIcon from "./HeartIcon.jsx";

const Header = ({ heart }) => {
    const [operation, setOperation] = useContext(OperationContext);

    const [open, setOpen] = useState(false);
    const toggleMargin = () => setOpen(!open);

    const operations = operationsConfig;

    const styles = {
        header: {
            position: "absolute",
            width: "100%",
            paddingTop: "10px",
            marginTop: open ? "-300px" : "0",
            top: 0,
            height: "21rem",
            backgroundColor: "white",
            borderBottomRightRadius: "20px",
            borderBottomLeftRadius: "20px",
            boxShadow: "2px 2px 4px rgba(0,0,0,.5)",
            transition: "margin-top 1s",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        },
        headText: {
            margin: "-60px 0 0 0",
            textShadow: "1px 1px 2px rgba(0,0,0,.25)",
        },
        bottomDiv: {
            width: "100%",
            boxSizing: "border-box",
            bottom: "0",
            position: "absolute",
        },
        heart: { float: "left", padding: "10px 5px" },
        amount: {
            padding: "4px 8px",
            display: "inline-block",
            float: "right",
            position: "relative",
            fontSize: "2rem",
            margin: "0",
        },
    };

    return (
        <div style={styles.header} onClick={toggleMargin}>
            <p style={styles.headText}>select operation to practice</p>
            {operations.map((el) => (
                <Btn
                    key={el.title}
                    text={el.title}
                    onClick={() => setOperation(el)}
                />
            ))}
            <div style={styles.bottomDiv}>
                <div style={styles.heart}>
                    {Object.entries(heart).map((e) => (
                        <HeartIcon key={e} color={e[1] ? "red" : "white"} />
                    ))}
                </div>
                <div style={styles.amount}>{operation.amount}</div>
            </div>
        </div>
    );
};

export default Header;
