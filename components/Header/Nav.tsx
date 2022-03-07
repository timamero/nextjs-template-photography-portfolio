import React, { useState } from 'react'
import styles from '../../styles/components/Nav.module.css'
import Link from 'next/link'

const Nav = () => {
  const [isActive, setIsActive] = useState(false)
  const handleClick = () => {
    setIsActive(!isActive)
  }

  return (
    <nav id="mainNav" className={styles.navWrapper}>
      <svg onClick={handleClick} className={styles.menu} width="20" version="1.1" viewBox="0 0 210 210">
        <g id="XMLID_2_">
          <path id="XMLID_4_" d="M75,0H15C6.716,0,0,6.716,0,15v60c0,8.284,6.716,15,15,15h60c8.284,0,15-6.716,15-15V15   C90,6.716,83.284,0,75,0z"/>
          <path id="XMLID_6_" d="m75 120h-60c-8.284 0-15 6.716-15 15v60c0 8.284 6.716 15 15 15h60c8.284 0 15-6.716 15-15v-60c0-8.284-6.716-15-15-15z"/>
          <path id="XMLID_8_" d="m195 0h-60c-8.284 0-15 6.716-15 15v60c0 8.284 6.716 15 15 15h60c8.284 0 15-6.716 15-15v-60c0-8.284-6.716-15-15-15z"/>
          <path id="XMLID_10_" d="m195 120h-60c-8.284 0-15 6.716-15 15v60c0 8.284 6.716 15 15 15h60c8.284 0 15-6.716 15-15v-60c0-8.284-6.716-15-15-15z"/>
        </g>
      </svg>
      <ul className={`${styles.menuItemsWrapper} ${isActive && styles.menuIsActive}` }>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/portfolio'>
          <a>Portfolio</a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
          <a>About</a>
          </Link>
        </li>
        <li>
          <Link href='/contact'>
          <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav