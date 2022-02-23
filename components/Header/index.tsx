import React from 'react'
import styles from './Header.module.css'
import Nav from './Nav'

const Header = () => {
  return (
    <div className={styles.header}>
      <Nav />
      <p className={styles.headerText}><span className={styles.headerBold}>Boon</span> <span className={styles.headerLight}>Photography</span></p>
    </div>
  )
}

export default Header;