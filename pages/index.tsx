import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Layout from './components/Layout'

const Home: NextPage = () => {
  const homeLayoutProps = {
    pageTitle: 'Boon Photography',
    pageDescription: 'Boon Photography Portfolio Website'
  }
  return (
    <Layout {...homeLayoutProps}>
      <div>
        <h1>Boon Photography</h1>
      </div>
    </Layout>
  )
}

export default Home
