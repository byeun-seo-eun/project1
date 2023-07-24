import styles from './about.module.css'

const About = () => {
    return (
        <secton className={`con ${styles.about}`}>
            <div className="inner">
                <h2>자기소개 페이지</h2>
            </div>            
        </secton>
    );
};

export default About;