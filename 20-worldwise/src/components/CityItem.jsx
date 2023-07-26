import PropTypes from "prop-types";
import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";

const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(new Date(date));

function CityItem({ city }) {
    const { cityName, emoji, date, id, position } = city;

    return (
        <li
            className={styles.cityItem}
            to={`${id}?lat=${position.lat}&lng=${position.lng}`}
        >
            <Link className={styles.cityItem} to={`${id}`} />
            <span className={styles.emoji}>{emoji}</span>
            <h3 className={styles.name}>{cityName}</h3>
            <time className={styles.date}>{formatDate(date)}</time>
            <button className={styles.deleteBtn}>&times;</button>
        </li>
    );
}

CityItem.propTypes = {
    city: PropTypes.shape({
        cityName: PropTypes.string,
        country: PropTypes.string,
        emoji: PropTypes.string,
        date: PropTypes.string,
        notes: PropTypes.string,
        position: PropTypes.shape({
            lat: PropTypes.number,
            lng: PropTypes.number,
        }),
        id: PropTypes.number,
    }),
};

export default CityItem;
