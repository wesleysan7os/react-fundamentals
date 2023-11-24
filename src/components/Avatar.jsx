import styles from './Avatar.module.css'

export const Avatar = ({ source }) => {
  return <img className={styles.avatar} src={source} />
}
