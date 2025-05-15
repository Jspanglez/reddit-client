import React from 'react'
import styles from './Header.module.css'
import SearchBar from '../SearchBar/SearchBar'
import { useSelector } from 'react-redux'

function Header({ onSearch }) {
  const currentSubreddit = useSelector((state) => state.subreddit.current)

  const handleLogoClick = () => {
    window.location.reload()
  }

  return (
    <header className={styles.header}>
      <h1 className={styles.logo} onClick={handleLogoClick}>
        <img src='./public/reddit.svg'/> Reddit <b>Lite</b>
      </h1>
      <SearchBar onSearch={onSearch}/>
      <h1 className={styles.currentSub}>
        {currentSubreddit ? (
          <>
            Best of <span className={styles.subName}>{currentSubreddit}</span>
          </>
        ) : (
          'Select a Subreddit'
        )}
      </h1>
    </header>
  )
}

export default Header