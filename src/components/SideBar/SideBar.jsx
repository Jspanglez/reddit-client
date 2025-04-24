import React from 'react'
import styles from './SideBar.module.css'

const subs = []

let i = 1
let subName = 'r/Subreddit '

while (i <= 10) {
  let newSub = { key: i, name: subName + i }
  subs.push(newSub)
  i++
}

function SideBar() {
  return (
    <div className={styles.subContainer}>
      <h2>Subreddits</h2>
      {subs.map(x => (
        <button key={x.key} className={styles.subreddit}>{x.name}</button>
      ))}
    </div>
  )
}

export default SideBar