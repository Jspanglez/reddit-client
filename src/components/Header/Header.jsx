import React from 'react'
import styles from './Header.module.css'
import SearchBar from '../SearchBar/SearchBar'

function Header() {
  return (
    <header className={styles.header}>
      <h1>
        <img src='./public/reddit.svg'/> Reddit <b>Lite</b>
      </h1>
      <SearchBar />
    </header>
  )
}

export default Header