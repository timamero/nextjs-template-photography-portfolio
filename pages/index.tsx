import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import homePhoto1 from '../public/homePhoto1.jpg'

const Home: NextPage = () => {
  const homeLayoutProps = {
    pageTitle: 'Boon Photography',
    pageDescription: 'Boon Photography Portfolio Website'
  }
  return (
    <Layout {...homeLayoutProps}>
      <div>
        <div className={styles.imageWrapper}>
          <Image 
            src={homePhoto1}
            alt="Example photography"
            layout="fill"
          />
        </div>
      </div>
    </Layout>
  )
}

export default Home
