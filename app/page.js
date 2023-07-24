
import About from './about/page'
import Main from './main/Main'
import style from './page.module.css'

export default function Home() {
  return (
    <main className={ style.main }>
      <Main />     
    </main>
  )
}
