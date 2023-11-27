import { Avatar, Comment } from './index.js' 
import styles from './Post.module.css'

export const Post = ({ author, content, source }) => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar source={source} hasBorder />
          <div className={styles.authorInfo}>
            <strong>{author}</strong>
            <span>Dev Front-end</span>
          </div>
        </div>
        <time 
          title="11 de Maio às 08:13h" 
          dateTime="2022-05-11 08:13:00"
        >Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, 
          evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>👉 <a href=''>jane.design/doctorcare</a></p>
        <a href=''>#novoprojeto</a> <a href=''>#nlw</a> <a href=''>#rocketseat</a>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder='Escreva um comentário...' />
        <button type="submit">Publicar</button>
      </form>

      <div className={styles.commentList}>
        <Comment /> 
        <Comment /> 
        <Comment /> 
      </div>
    </article>
  )
}
