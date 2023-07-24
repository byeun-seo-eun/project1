// "use client";

import styles from './card.module.css'

const Card = ({ title, desc }) => {
    return (
        <artcile className={styles.card}>
            <h3> { title } </h3>
            <p>
                {desc}
            </p>
        </artcile>
    );
};

export default Card;