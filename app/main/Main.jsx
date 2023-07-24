import styles from './main.module.css'

// import styles from './main.module.css'
import style from './main.module.css'

const Main = () => {
    return (
        <secton id="content" >
                <div className={ style.inner }>
                <h2> 메인 페이지 입니다.</h2>
                    <ul>
                        <li>
                            <h3>타이틀1</h3>
                        </li>
                        <li>
                            <h3>타이틀2</h3>
                        </li>
                        <li>
                            <h3>타이틀3</h3>
                        </li>
                        <li>
                            <h3>타이틀4</h3>
                        </li>
                    </ul>
            </div>
        </secton>
    );
};

export default Main;