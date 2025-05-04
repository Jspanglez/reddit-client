import React from 'react'
import styles from './Header.module.css'
import SearchBar from '../SearchBar/SearchBar'
import { useSelector } from 'react-redux'

function Header() {
  const currentSubreddit = useSelector((state) => state.subreddit.current)

  return (
    <header className={styles.header}>
      <h1>
        <img src='./public/reddit.svg'/> Reddit <b>Lite</b>
      </h1>
      <SearchBar />
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