import Card from "@/components/Card";
import { use } from "react";
import styles from './post.module.css'

const Post = () => {

    const  getData = async() => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        return data;
    }

    const post = use(getData());
    console.log( post )
    return (
        <section className={`con`}>
            <div className="inner">
                <h2>포스트 페이지 입니다.</h2>
                <div className={styles.list}>
                {
                    post.map( item => <Card key={item.id} title={item.title}  desc={ item.body }/>)
                }
                </div>
            </div>
        </section>
    );
};

export default Post;

/* 

 post.map( item => <p key={item.id}>
                        {item.id} / {item.title}
                    </p>)


import { use } from "react";

export default function Page() {
  // use Hook을 이용해 제공
  const name = use(getData());

  return <div>Hello World!</div>;
}

async function getData() {
  const res = await fetch("API 주소");
  const data = await res.json();
  return data;
}

*/