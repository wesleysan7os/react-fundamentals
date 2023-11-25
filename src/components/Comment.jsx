import { Avatar } from './index.js'
import { Trash } from 'phosphor-react'

import styles from './Comment.module.css'

export const Comment = () => {
  return (
    <article className={styles.article}>
      <div className={styles.authorWrapper}>
        <Avatar source="https://github.com/igorpaiva.png"/>
        <header>
          <div className={styles.author}>
            <strong>Igor Paiva</strong>
            <time 
              title="11 de Maio às 07:13h" 
              dateTime="2022-05-11 07:13:00"
            >Publicado há 2h</time>
          </div>
          <Trash />
        </header>
      </div>
      <div className={styles.commentContent}>
      <footer>
        <span>Aplaudir</span>
      </footer>
      </div>
    </article>
  )
}
