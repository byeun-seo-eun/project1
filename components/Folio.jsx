import styles from './folio.module.css'

const Folio = ({title, imgurl, desc}) => {
    return (
        <li>
            <h3>{title}</h3>
            <div>
                <img src={imgurl} alt="" />
            </div>
            <p>{desc} </p>
        </li>
    );
};

export default Folio;