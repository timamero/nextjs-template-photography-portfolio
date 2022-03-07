import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Carousel from '../components/Carousel'

const Home: NextPage = () => {
  const homeLayoutProps = {
    pageTitle: 'Boon Photography',
    pageDescription: 'Boon Photography Portfolio Website'
  }
  return (
    <Layout {...homeLayoutProps}>
      <div>
        <Carousel />
      </div>
    </Layout>
  )
}

export default Home
