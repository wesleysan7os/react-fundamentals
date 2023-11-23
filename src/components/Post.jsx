export const Post = ({ author, content }) => {
  return (
    <article>
      <strong>{author}</strong>
      <p>{content}</p>
    </article>
  )
}
