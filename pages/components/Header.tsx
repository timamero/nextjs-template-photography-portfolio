import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <p><span className={styles.headerBold}>Boon</span> <span className={styles.headerLight}>Photography</span></p>
    </div>
  )
}

export default Header;