import { Avatar } from './index.js'
import { ThumbsUp, Trash } from 'phosphor-react'

import styles from './Comment.module.css'

export const Comment = () => {
  return (
    <article className={styles.commentSection}>
      <Avatar source="https://github.com/igorpaiva.png"/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Igor Paiva</strong>
              <time 
                title="11 de Maio às 07:13h" 
                dateTime="2022-05-11 07:13:00"
              >Publicado há 2h</time>
            </div>
            <button>
              <Trash size={24}/>
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20}/>
            <span>Aplaudir</span>
          </button>
          <span>03</span>
        </footer>
      </div>
    </article>
  )
}
