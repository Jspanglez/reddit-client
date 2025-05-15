import React, { useEffect, useState } from 'react'
import styles from './SideBar.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { clicked, fetchSubreddits } from '../../store/subreddditSlice'

function SideBar() {
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
    <aside className={styles.subContainer}>
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