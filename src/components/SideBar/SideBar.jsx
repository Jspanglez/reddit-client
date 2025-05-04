import React from 'react'
import styles from './SideBar.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { clicked } from '../../store/subreddditSlice'

const subs = []

let i = 1
let subName = 'r/Subreddit '

while (i <= 10) {
  let newSub = { key: i, name: subName + i }
  subs.push(newSub)
  i++
}

function SideBar() {
  const dispatch = useDispatch();
  const currentSubreddit = useSelector((state) => state.subreddit.current)

  return (
    <aside className={styles.subContainer}>
      <h2>Subreddits</h2>
      {subs.map(x => (
        <button 
        key={x.key} 
        className={currentSubreddit === x.name ? styles.activeSub : styles.subreddit}
        onClick={() => dispatch(clicked(x.name))}>
          {x.name}
        </button>
      ))}
    </aside>
  )
}

export default SideBar