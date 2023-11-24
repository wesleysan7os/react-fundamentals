import { Header, Sidebar, Post } from './components'
import styles from './App.module.css'
import './global.css'

export const App = () => {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Sabrina Mendes"
            content="Um novo post muito legal"
            source='https://github.com/silvasabrina.png'
          />
          <Post
            author="Wesley Santos"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime itaque quas corporis beatae veritatis, reprehenderit asperiores vitae quod possimus qui dignissimos unde deleniti consequatur quae, repellat debitis sunt, est rerum!"
            source='https://github.com/wesleysan7os.png'
          />
        </main>
      </div>
    </>
  )
}

