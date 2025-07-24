import { Link } from "react-router-dom";
import Btn from "./Btn";

const LinkBtn = ({ to, text, onClick, transparent = true }) => {
    return (
        <Link
            to={to}
            style={{
                textDecoration: "none",
                color: "black",
                margin: "auto",
            }}
        >
            <Btn text={text} onClick={onClick} transparent={transparent} />
        </Link>
    );
};

export default LinkBtn;
