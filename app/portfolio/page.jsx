import Folio from "@/components/Folio";
import styles from './portfolio.module.css'

const dataList  = [
    {id:1, title:'프로젝트1', imgurl:'/images/img01.jpg',desc:'project1에 대한 설명내용'},
    {id:2, title:'프로젝트2', imgurl:'/images/img02.jpg',desc:'project2에 대한 설명내용'},
    {id:3, title:'프로젝트3', imgurl:'/images/img03.jpg',desc:'project3에 대한 설명내용'},
]

const Protfolio = () => {
    return (
        <section className={`con`}>
            <div className="inner">
            <h2> 포트폴리오 페이지 </h2>

            <ul className={styles.list}>
                {
                    dataList.map( item => <Folio key={item.id} {...item} />)
                }
            </ul>
            </div>
        </section>
    );
};

export default Protfolio;