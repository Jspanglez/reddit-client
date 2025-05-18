import React, { useEffect, useState } from 'react'
import styles from './SideBar.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { clicked, fetchSubreddits } from '../../store/subreddditSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function SideBar({ sidebarOpen, setSidebarOpen }) {
  const dispatch = useDispatch();
  const { subreddits, current, loading, error } = useSelector((state) => state.subreddit)

  useEffect(() => {
    dispatch(fetchSubreddits())
  }, [dispatch])

  if (loading) {
    return <aside className={styles.subContainer}>Loading...</aside>
  }

  if (error) {
    return <aside className={styles.subContainer}>{error}</aside>
  }

  return (
    <aside className={`${styles.subContainer} ${sidebarOpen ? 'open' : ''}`}>
      <button
        className={styles.close}
        onClick={() => setSidebarOpen(false)}
        aria-label="Close sidebar"
      >
        <FontAwesomeIcon icon={faXmark} size="lg" style={{color: "#0091ff",}} />
      </button>
      <h2>Subreddits</h2>
      {subreddits.map(x => (
        <button 
        key={x.key} 
        className={current === x.name ? styles.activeSub : styles.subreddit}
        onClick={() => dispatch(clicked(x.name))}>
          {x.name}
        </button>
      ))}
    </aside>
  )
}

export default SideBar