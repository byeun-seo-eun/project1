import Link from 'next/link';
import NavBar from './NavBar';
import styles from './header.module.css'

const Header = () => {
    return (
        <header id="header" className={styles.header}>
            <div className='inner'>
               <h1><Link href="/"><img src="/logo.svg" alt="" /></Link></h1> 

               <NavBar />
               
               <ul className={styles.top_menu}>
                    <li><Link href="/">홈</Link></li>
                    <li><Link href="/">이메일</Link></li>
                    <li><Link href="/">사이트맵</Link></li>
                    <li><Link href="/">로그인</Link></li>
                </ul> 
            </div>
        </header>
    );
};

export default Header;