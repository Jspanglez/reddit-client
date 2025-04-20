import React from 'react'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <h1><img src='./public/reddit.svg'/> Reddit <b>Lite</b></h1>
    </header>
  )
}

export default Header