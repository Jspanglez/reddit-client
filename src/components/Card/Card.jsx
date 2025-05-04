import React from 'react'
import styles from './Card.module.css'
import Vote from '../Vote/Vote'

function Card() {
  return (
    <main className={styles.cardContainer}>
      <div className={styles.cardTopContainer}>
        <Vote />
        <h3 className={styles.title}>Post Title</h3>
        <p className={styles.postBody}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet reprehenderit cumque dolores et non qui modi earum cum laborum, saepe, odit natus doloribus sequi dolorum animi, dolore vitae quae similique!
        </p>
      </div>
      {/* Image */}
      <hr />
      <div className={styles.cardBottomContainer}>
        <p>🤖 UserName</p>
        <p>1 hour(s) ago</p>
        <p>100</p>
      </div>
    </main>
  )
}

export default Card