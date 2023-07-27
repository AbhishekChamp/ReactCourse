import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ children, onClick, type }) {
    return (
        <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
            {children}
        </button>
    );
}

export default Button;

Button.propTypes = {
    children: PropTypes.any,
    onClick: PropTypes.func,
    type: PropTypes.any,
};
