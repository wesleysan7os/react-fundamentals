import { Avatar } from './index.js' 
import styles from './Post.module.css'

export const Post = ({ author, content, source }) => {
  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar source={source} />
          <div>
            <strong>{author}</strong>
            <span>Dev Front-end</span>
          </div>
        </div>
        <time 
          title="11 de Maio às 08:13h" 
          dateTime="2022-05-11 08:13:00"
        >Publicado há 1h</time>
      </header>

      <div className={styles.post}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, 
          evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>👉 <span>jane.design/doctorcare</span></p>
        <span>#novoprojeto</span> <span>#nlw</span> <span>#rocketseat</span>
      </div>

      <footer>
        <strong>Deixe seu feedback</strong>
      </footer>
    </article>
  )
}
