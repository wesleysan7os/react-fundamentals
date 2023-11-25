import { PencilSimpleLine } from 'phosphor-react'
import styles from './Sidebar.module.css'
import { Avatar } from './Avatar'

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
			<img className={styles.cover} src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=40&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
			<div className={styles.profile}>
				<Avatar source="https://github.com/wesleysan7os.png" hasBorder />
				<strong>Wesley Santos</strong>
				<span>Dev Front-end</span>
			</div>

			<footer>
				<a href="#">
					<PencilSimpleLine size={20} weight="bold" />
          Editar seu perfil
        </a>
			</footer>
    </aside>
  )
}
