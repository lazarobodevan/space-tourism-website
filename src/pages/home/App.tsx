
import Header from '../../components/Header';
import style from './App.module.scss'
import homeBackground from '../../assets/home/background-home-desktop.jpg'

function App() {
  return (
    <div className={style.container}>
      <Header/>

      <section className={style.page_content}>

        <div className={style.text_container}>
          <h3 className={style.heading}>SO, YOU WANT TO TRAVEL TO</h3>
          <h1 className={style.space}>SPACE</h1>
          <p className={style.body}>
            Let’s face it; if you want to go to space, you might as well genuinely 
            go to outer space and not hover kind of on the edge of it. Well sit back, 
            and relax because we’ll give you a truly out of this world experience!
          </p>
        </div>

        <div className={style.ellipse}>
          EXPLORE
        </div>

      </section>
    </div>
  );
}

export default App;
