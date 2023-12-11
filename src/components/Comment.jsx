import { useState } from "react";
import { ThumbsUp, Trash } from "phosphor-react";

import { Avatar } from "./index.js";
import styles from "./Comment.module.css";

export const Comment = ({ content, onCommentDelete }) => {
  const [likeCount, setLikeCount] = useState(0);

  function handleCommentDelete() {
    onCommentDelete(content);
  }

  function handleCommentLike() {
    setLikeCount(likeCount + 1);
  }

  return (
    <article className={styles.commentSection}>
      <Avatar source="https://github.com/igorpaiva.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Igor Paiva</strong>
              <time title="11 de Maio às 07:13h" dateTime="2022-05-11 07:13:00">
                Publicado há 2h
              </time>
            </div>
            <button onClick={handleCommentDelete} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleCommentLike}>
            <ThumbsUp size={20} />
            <span>Aplaudir</span>
          </button>
          <span>{likeCount}</span>
        </footer>
      </div>
    </article>
  );
};
