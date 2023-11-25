import styles from './Avatar.module.css'

export const Avatar = ({ source, hasBorder }) => {
  return <img className={ hasBorder && styles.avatarWithBorder} src={source} />
}
