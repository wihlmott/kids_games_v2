import { useContext, useState } from "react";
import { OperationContext } from "../Contexts";
import Btn from "./Btn";
import { operationsConfig } from "../Config.jsx";

const Header = () => {
    const [operation, setOperation] = useContext(OperationContext);

    const [open, setOpen] = useState(false);
    const toggleMargin = () => setOpen(!open);

    const operations = operationsConfig;

    const styles = {
        header: {
            paddingTop: "10px",
            marginTop: open ? "-340px" : "0",
            top: 0,
            height: "24rem",
            backgroundColor: "white",
            borderBottomRightRadius: "20px",
            borderBottomLeftRadius: "20px",
            boxShadow: "2px 2px 4px rgba(0,0,0,.5)",
            transition: "margin-top 1s",
        },
        amount: {
            position: "relative",
            float: "right",
            margin: "105px 10px 0 0",
            fontSize: "2rem",
        },
    };

    return (
        <div style={styles.header} onClick={toggleMargin}>
            {operations.map((el) => (
                <Btn
                    key={el.title}
                    text={el.title}
                    onClick={() => setOperation(el)}
                />
            ))}
            <div style={styles.amount}>{operation.amount}</div>
        </div>
    );
};

export default Header;
