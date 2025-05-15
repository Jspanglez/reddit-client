import React, { useState } from 'react'
import styles from './Vote.module.css'
import { TbArrowBigUp } from "react-icons/tb"
import { TbArrowBigUpFilled } from "react-icons/tb"
import { TbArrowBigDown } from "react-icons/tb"
import { TbArrowBigDownFilled } from "react-icons/tb"
import { formatNumber } from '../Card/Card'


function Vote({ votes }) {

  const [upClicked, setUpClicked] = useState(false)
  const [downClicked, setDownClicked] = useState(false)

  const handleUpvote = () => {
    if (upClicked) {
      setUpClicked(false)
    } else {
      setUpClicked(true)
      setDownClicked(false)
    }
  }

  const handleDownvote = () => {
    if (downClicked) {
      setDownClicked(false)
    } else {
      setDownClicked(true)
      setUpClicked(false)
    }
  }

  return (
    <div className={styles.voteContainer}>
      <button 
      onClick={handleUpvote}>
        {upClicked ? (
          <TbArrowBigUpFilled className={styles.upVote}/>
        ) : (
          <TbArrowBigUp className={styles.defaultUpVote}/>
        )}
      </button>
      <p
        className={`${styles.defaultVoteNum} ${
          upClicked ? styles.upVoteNum : downClicked ? styles.downVoteNum : ''
        }`}
      >
        {formatNumber(votes)}
      </p>
      <button 
      onClick={handleDownvote}>
        {downClicked ? (
          <TbArrowBigDownFilled className={styles.downVote} />
        ) : (
          <TbArrowBigDown className={styles.defaultDownVote}/>
        )}
      </button>
    </div>
  )
}

export default Vote